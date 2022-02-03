package user

import (
	"database/sql"
	"errors"
	"fmt"

	dba "goapp/dbConnection"
)

// Call userLogin to get user profile or error message
func UserLogin(userID string, inputPassword string) (UserProfile, error) {
	//open database connection to Connection cloud provider;
	db, err := dba.OpenConnection()
	if err != nil {
		fmt.Println("error verifying connection with db.Ping")
		panic(err.Error())
	}
	var password sql.NullString
	var userInfo UserProfile
	// Query requested userID if existing return password for comparison
	error := db.QueryRow("SELECT passcode FROM classicmodels.customers WHERE userID = ?;", userID).Scan(&password)
	if error != nil {
		return userInfo, errors.New("customer not found")
	}
	//if password matches database
	if password.String == inputPassword {
		// User's Basic Profile; Will implement more, like order history
		data, err := db.Query("SELECT customerName, phone, city, state, country, postalCode FROM classicmodels.customers WHERE userId = ?;", userID)
		if err != nil {
			fmt.Println("Query for User's Profile failed")
		}
		fmt.Println("It looks like we have the user profile data")
		fmt.Println(data.Columns())
		for data.Next() {
			if err := data.Scan(&userInfo.CustomerName, &userInfo.Phone, &userInfo.City, &userInfo.State, &userInfo.Country, &userInfo.PostalCode); err != nil {
				fmt.Println(err)
				return userInfo, nil
			}
		}
	}
	db.Close()
	return userInfo, errors.New("wrong password")
}
