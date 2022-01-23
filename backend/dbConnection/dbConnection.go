package dbConnection

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func OpenConnection() (*sql.DB, error) {
	var (
		dbUser = "gatoreats"     // e.g. 'my-db-user'
		dbPwd  = "123456"        // e.g. 'my-db-password'
		dbName = "classicmodels" // e.g. 'my-database'
	)

	dbURI := fmt.Sprintf("%s:%s@tcp(35.224.175.177:3306)/%s", dbUser, dbPwd, dbName)
	fmt.Println(dbURI)
	// dbPool is the pool of database connections.
	db, err := sql.Open("mysql", dbURI)
	if err != nil {
		fmt.Println("Connection to database failed")
	}
	data, err := db.Query("SELECT * FROM classicmodels.customers;")
	if err != nil {
		fmt.Println("Query to database failed")
	}
	fmt.Println(data.Columns())
	return db, err
}
