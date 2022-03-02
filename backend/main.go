package main

import (
	"log"
	"net/http"

	"goapp/dbConnection"
	"goapp/user"
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

	// userTuple, err := user.UserLogin("112", "71800")
	// if err != nil {
	// 	fmt.Println("error when scanning user profile")
	// }
	// fmt.Println(userTuple)

	if err := dbConnection.InitDB(); err != nil {
		panic(err)
	}
	http.HandleFunc("/register", user.UserRegisterHandler)
	log.Println("listen http on port :8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		panic(err)
	}
}
