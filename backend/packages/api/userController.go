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

type Claims2 struct {
	db.Restaurant
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

func LoginAsRestaurant(c *fiber.Ctx, dbConn *sql.DB) error {
	print("LoginAsRestaurant \n")
	loginUser := &db.Restaurant{}

	if err := c.BodyParser(loginUser); err != nil {
		return err
	}

	restaurant := &db.Restaurant{}
	if err := dbConn.QueryRow(db.GetRestaurantByEmailQuery, loginUser.Owneremail).
		Scan(&restaurant.Password); err != nil {
		if err == sql.ErrNoRows {
			return c.Status(http.StatusUnauthorized).JSON(fiber.Map{"success": false, "errors": []string{"No such user"}})
		}
	}
	// print(restaurant.Password, loginUser.Password)
	// match := utils.ComparePassword(restaurant.Password, loginUser.Password)
	if loginUser.Password != restaurant.Password {
		return c.Status(http.StatusUnauthorized).JSON(fiber.Map{"success": false, "errors": []string{"Incorrect credentials"}})
	}

	//expiration time of the token ->30 mins
	expirationTime := time.Now().Add(30 * time.Minute)

	restaurant.Password = ""
	claims := &Claims2{
		Restaurant: *restaurant,
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

	return c.JSON(&fiber.Map{"success": true, "user": claims.Restaurant, "token": tokenValue})
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
		err = rows.Scan(&restaurant.ID, &restaurant.Name, &restaurant.Owneremail, &restaurant.Zipcode,
			&restaurant.CreatedAt, &restaurant.UpdatedAt)
		if err != nil {
			return c.Status(http.StatusUnauthorized).
				JSON(fiber.Map{"success": false, "errors": []string{"Data is corrupted"}})
		}
		restaurants = append(restaurants, restaurant)
	}
	return c.Status(http.StatusOK).JSON(restaurants)
}

func CreateRestaurant(c *fiber.Ctx, dbConn *sql.DB) error {
	print("POST Request : Sign up as a restaurant\n")
	r := new(db.Restaurant)

	if err := c.BodyParser(r); err != nil {
		return err
	}

	_, err := dbConn.Query(db.CreateRestaurant, r.Owneremail, r.Password, r.Name, r.Zipcode, r.Phone)
	if err != nil {
		return err
	}
	return c.JSON(&fiber.Map{"success": true})
}

func AddMenu(c *fiber.Ctx, dbConn *sql.DB) error {
	print("POST Request : Adding a food menu item\n")
	r := new(db.FoodMenu)

	if err := c.BodyParser(r); err != nil {
		return err
	}

	_, err := dbConn.Query(db.AddMenuItem, r.RID, r.Price, r.Name) //RID = Restaurant ID
	if err != nil {
		return err
	}
	return c.JSON(&fiber.Map{"success": true})
}

func RestaurantByZipCode(c *fiber.Ctx, dbConn *sql.DB) error {
	print("GET Request : Searching for restaurant\n")
	zipCodeStr := c.Query("ZipCode")
	zipCode, _ := strconv.ParseInt(zipCodeStr, 10, 64)
	print(zipCode, zipCode-10, zipCode+10)
	restaurants := []db.Restaurant{}
	rows, err := dbConn.Query(db.GetAllRestaurantsQueryByZipCode, zipCodeStr)
	if err != nil {
		return c.Status(http.StatusUnauthorized).
			JSON(fiber.Map{"success": false, "errors": []string{"Our homepage is down, please try again later"}})
	}
	defer rows.Close()
	print(rows)
	for rows.Next() {
		var restaurant db.Restaurant
		err = rows.Scan(&restaurant.Owneremail, &restaurant.Name, &restaurant.Zipcode, &restaurant.Phone)
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
