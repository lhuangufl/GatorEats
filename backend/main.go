package main

import (
	"fmt"
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	var (
        dbUser                 = "gatoreats"                 // e.g. 'my-db-user'
        dbPwd                  = "123456"                 // e.g. 'my-db-password'
        dbName                 = "classicmodels"                  // e.g. 'my-database'
	)


	dbURI := fmt.Sprintf("%s:%s@tcp(35.224.175.177:3306)/%s", dbUser, dbPwd, dbName)
	fmt.Println(dbURI)
	// dbPool is the pool of database connections.
	db, err := sql.Open("mysql", dbURI)
	if err != nil {
			fmt.Println(err)
	}
	defer db.Close()
	err = db.Ping()
	if err != nil {
		fmt.Println("error verifying connection with db.Ping")
		panic(err.Error())
	}

	// func (db *DB) Query(query string, args ...interface{}) (*Rows, error)
	data, err := db.Query("SELECT * FROM classicmodels.customers;")
	if err != nil {
		panic(err.Error())
	}
	fmt.Println(data.Columns())
	fmt.Println("Successful Connection to Database!")
}
