package main

import (
	"fmt"

	//dba "github.com/lhuangufl/GatorEats-CEN5035-Spring22/dbConnection"
	user "github.com/lhuangufl/GatorEats-CEN5035-Spring22/user"
)

func main() {

	// Below are two testing cases
	////////////////////////////////////////////////////////////////
	// Testing openConnection API; Running Okay.
	/*
		db, err := dba.OpenConnection()
		if err != nil {
			fmt.Println("Connection Error!")
			fmt.Println(err)
		}

		// func (db *DB) Query(query string, args ...interface{}) (*Rows, error)
		data, err := db.Query("SELECT * FROM classicmodels.customers;")
		fmt.Println(data.Columns())
		if err != nil {
			fmt.Println("Returned a error message")
		}
		fmt.Println("Successful Connection to Database!")
		db.Close()
	*/
	//Testing userLogin API; Running Okay
	// User 103 is a test user
	userTuple, err := user.UserLogin("112", "71800")
	if err != nil {
		fmt.Println("error when scanning user profile")
	}
	fmt.Println(userTuple)
}
