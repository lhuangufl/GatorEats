package db

import (
	"database/sql"
	"fmt"
	"path/filepath"

	"github.com/apex/log"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
)

func ConnectDB() (*sql.DB, error) {
	user := "fqhmuqxpozwlin:fb9d151caa532cdd24dbd7fd9bcb2ef6215a2d499bfd5c7d48446b0e9b36a315"
	host := "ec2-52-206-193-199.compute-1.amazonaws.com"
	database := "db63l3ukuv77j8"

	connString := fmt.Sprintf("postgresql://%s@%s:5432/%s", user, host, database)

	db, _ := sql.Open("postgres", connString)
	if err := db.Ping(); err != nil {
		return nil, err
	}
	return db, nil
}

func Migrate(db *sql.DB, dbName string) error {
	log.Info("running db migrations, to disable set RUN_MIGRATION=false")
	driver, err := postgres.WithInstance(db, &postgres.Config{})
	if err != nil {
		return err
	}

	dir, _ := filepath.Abs("../packages/db/migrations")

	if err != nil {
		return err
	}
	m, err := migrate.NewWithDatabaseInstance(fmt.Sprintf("file://%s", dir), dbName, driver)
	if err != nil {
		return err
	}

	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		return err
	}

	return nil
}
