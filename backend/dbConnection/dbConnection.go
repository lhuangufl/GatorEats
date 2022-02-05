package dbConnection

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
	"gopkg.in/ini.v1"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

type DBConf struct {
	Host     string `ini:"DB_HOST"`
	Database string `ini:"DB_DATABASE"`
	User     string `ini:"DB_USER"`
	Pass     string `ini:"DB_PASS"`
}

func InitDB() error {
	cfg, err := ini.Load(".env")
	if err != nil {
		return err
	}

	var conf DBConf
	if err := cfg.MapTo(&conf); err != nil {
		return err
	}

	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
		conf.User, conf.Pass, conf.Host, conf.Database)
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	return err
}

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
