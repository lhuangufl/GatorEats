package api

import (
	"database/sql"
	"goapp/packages/config"
	"goapp/packages/db"
	"goapp/packages/utils"
	"net/http"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt"
)

type Claims struct {
	db.User
	jwt.StandardClaims
}

func Pong(c *fiber.Ctx) error {
	return c.SendString("pong")
}

func CreateUser(c *fiber.Ctx, dbConn *sql.DB) error {
	user := &db.User{}

	if err := c.BodyParser(user); err != nil {
		return err
	}

	if errs := utils.ValidateUser(*user); len(errs) > 0 {
		return c.Status(http.StatusUnprocessableEntity).JSON(&fiber.Map{"success": false, "errors": errs})
	}

	if user.UserExists(dbConn) {
		return c.Status(400).JSON(&fiber.Map{"success": false, "errors": []string{"email already exists"}})
	}

	user.HashPassword()
	_, err := dbConn.Query(db.CreateUserQuery, user.Name, user.Password, user.Email)
	if err != nil {
		return err
	}
	return c.JSON(&fiber.Map{"success": true})
}

func Session(c *fiber.Ctx, dbConn *sql.DB) error {
	tokenUser := c.Locals("user").(*jwt.Token)
	claims := tokenUser.Claims.(jwt.MapClaims)
	userID, ok := claims["id"].(string)

	if !ok {
		return c.SendStatus(http.StatusUnauthorized)
	}

	user := &db.User{}
	if err := dbConn.QueryRow(db.GetUserByIDQuery, userID).
		Scan(&user.ID, &user.Name, &user.Password, &user.Email, &user.CreatedAt, &user.UpdatedAt); err != nil {
		if err == sql.ErrNoRows {
			return c.Status(http.StatusUnauthorized).JSON(fiber.Map{"success": false, "errors": []string{"Incorrect credentials"}})
		}
	}
	user.Password = ""
	return c.JSON(&fiber.Map{"success": true, "user": user})
}

func Login(c *fiber.Ctx, dbConn *sql.DB) error {
	loginUser := &db.User{}

	if err := c.BodyParser(loginUser); err != nil {
		return err
	}

	user := &db.User{}
	if err := dbConn.QueryRow(db.GetUserByEmailQuery, loginUser.Email).
		Scan(&user.ID, &user.Name, &user.Password, &user.Email, &user.CreatedAt, &user.UpdatedAt); err != nil {
		if err == sql.ErrNoRows {
			return c.Status(http.StatusUnauthorized).JSON(fiber.Map{"success": false, "errors": []string{"Incorrect credentials"}})
		}
	}

	match := utils.ComparePassword(user.Password, loginUser.Password)
	if !match {
		return c.Status(http.StatusUnauthorized).JSON(fiber.Map{"success": false, "errors": []string{"Incorrect credentials"}})
	}

	//expiration time of the token ->30 mins
	expirationTime := time.Now().Add(30 * time.Minute)

	user.Password = ""
	claims := &Claims{
		User: *user,
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	var jwtKey = []byte(config.Config[config.JWT_KEY])
	tokenValue, err := token.SignedString(jwtKey)

	if err != nil {
		return err
	}

	c.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    tokenValue,
		Expires:  expirationTime,
		Domain:   config.Config[config.CLIENT_URL],
		HTTPOnly: true,
	})

	return c.JSON(&fiber.Map{"success": true, "user": claims.User, "token": tokenValue})
}

func Home(c *fiber.Ctx, dbConn *sql.DB) error {
	restaurants := []db.Restaurant{}
	rows, err := dbConn.Query(db.GetAllRestaurantsQuery)
	defer rows.Close()
	if err != nil {
		return c.Status(http.StatusUnauthorized).
			JSON(fiber.Map{"success": false, "errors": []string{"Our homepage is down, please try again later"}})
	}
	for rows.Next() {
		var restaurant db.Restaurant
		err = rows.Scan(&restaurant.ID, &restaurant.Rname, &restaurant.Location, &restaurant.Rating,
			&restaurant.Rtype, &restaurant.Phone)
		if err != nil {
			return c.Status(http.StatusUnauthorized).
				JSON(fiber.Map{"success": false, "errors": []string{"Data is corrupted"}})
		}
		restaurants = append(restaurants, restaurant)
	}
	return c.Status(http.StatusOK).JSON(restaurants)
}

func CreateRestaurant(c *fiber.Ctx, dbConn *sql.DB) error {
	r := new(db.Restaurant)

	if err := c.BodyParser(r); err != nil {
		return err
	}

	_, err := dbConn.Query(db.CreateRestaurant, r.Rname, r.Location, r.Rating, r.Rtype, r.Phone, r.ZipCode)
	if err != nil {
		return err
	}
	return c.JSON(&fiber.Map{"success": true})
}

func RestaurantByZipCode(c *fiber.Ctx, dbConn *sql.DB) error {
	zipCodeStr := c.Query("zipCode", "0")
	zipCode, _ := strconv.ParseInt(zipCodeStr, 10, 64)

	restaurants := []db.Restaurant{}
	rows, err := dbConn.Query(db.GetAllRestaurantsQueryByZipCode, zipCode-10, zipCode+10)
	if err != nil {
		return c.Status(http.StatusUnauthorized).
			JSON(fiber.Map{"success": false, "errors": []string{"Our homepage is down, please try again later"}})
	}
	defer rows.Close()

	for rows.Next() {
		var restaurant db.Restaurant
		err = rows.Scan(&restaurant.ID, &restaurant.Rname, &restaurant.Location, &restaurant.Rating,
			&restaurant.Rtype, &restaurant.Phone)
		if err != nil {
			return c.Status(http.StatusUnauthorized).
				JSON(fiber.Map{"success": false, "errors": []string{"Data is corrupted"}})
		}
		restaurants = append(restaurants, restaurant)
	}
	return c.Status(http.StatusOK).JSON(restaurants)
}

func Logout(c *fiber.Ctx) error {
	c.ClearCookie()
	return c.SendStatus(http.StatusOK)
}
