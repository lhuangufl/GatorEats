package api

import (
	"database/sql"
	"goapp/packages/config"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/requestid"
)

func WithDB(fn func(c *fiber.Ctx, db *sql.DB) error, db *sql.DB) func(c *fiber.Ctx) error {
	return func(c *fiber.Ctx) error {
		return fn(c, db)
	}
}

func httpServer(db *sql.DB) *fiber.App {
	app := fiber.New()
	app.Use(logger.New())
	app.Use(requestid.New())

	api := app.Group("/api")
	api.Use(cors.New(cors.Config{
		AllowOrigins:     config.Config[config.CLIENT_URL],
		AllowCredentials: true,
		AllowHeaders:     "Content-Type, Content-Length, Accept-Encoding, Authorization, accept, origin",
		AllowMethods:     "POST, OPTIONS, GET, PUT， DELETE",
		ExposeHeaders:    "Set-Cookie",
	}))

	// public
	api.Get("/ping", Pong)

	api.Post("/login", WithDB(Login, db))
	api.Post("/vendorlogin", WithDB(LoginAsRestaurant, db))
	api.Post("/register", WithDB(CreateUser, db))
	api.Get("/logout", Logout)
	api.Post("/home", WithDB(Home, db))
	api.Get("/restaurantsbyzipcode", WithDB(RestaurantByZipCode, db))
	api.Post("/createrestaurant", WithDB(CreateRestaurant, db))
	api.Post("/addfoodmenuitem", WithDB(AddMenu, db))
	api.Get("/getfoodmenu", WithDB(MenuByOwnerID, db))
	api.Get("/getvendor", WithDB(GetRestaurant, db))
	api.Get("/getuserprofile", WithDB(GetUserProfile, db))

	api.Post("/order", WithDB(CreateOrder, db))
	api.Put("/order", WithDB(UpdateOrder, db))
	api.Delete("/order", WithDB(DeleteOrder, db))
	api.Get("/order", WithDB(ListOrder, db))

	// authed routes
	api.Get("/session", AuthorizeSession, WithDB(Session, db))

	return app
}
