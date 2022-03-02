package config

import (
	"os"
	"path/filepath"

	"github.com/apex/log"
	"github.com/joho/godotenv"
)

const (
	POSTGRES_USER        = "POSTGRES_USER"
	POSTGRES_PASSWORD    = "POSTGRES_PASSWORD"
	POSTGRES_DB          = "POSTGRES_DB"
	CLIENT_URL           = "CLIENT_URL"
	SERVER_PORT          = "SERVER_PORT"
	JWT_KEY              = "JWT_KEY"
	RUN_MIGRATION        = "RUN_MIGRATION"
	POSTGRES_SERVER_HOST = "POSTGRES_SERVER_HOST"
	ENVIRONEMT           = "ENV"
)

type ConfigType map[string]string

var Config = ConfigType{
	POSTGRES_USER:        "fqhmuqxpozwlin",
	POSTGRES_PASSWORD:    "fb9d151caa532cdd24dbd7fd9bcb2ef6215a2d499bfd5c7d48446b0e9b36a315",
	POSTGRES_DB:          "db63l3ukuv77j8",
	CLIENT_URL:           "",
	SERVER_PORT:          "5432",
	JWT_KEY:              "",
	RUN_MIGRATION:        "",
	POSTGRES_SERVER_HOST: "ec2-52-206-193-199.compute-1.amazonaws.com",
}

func InitConfig() {
	environment, exists := os.LookupEnv(ENVIRONEMT)
	var envFilePath string
	if exists && environment == "test" {
		envFilePath, _ = filepath.Abs("../.env.test")
	} else {
		envFilePath, _ = filepath.Abs("../.env")
	}
	if err := godotenv.Load(envFilePath); err != nil {
		log.WithField("reason", err.Error()).Fatal("No .env file found")
	}

	required := map[string]bool{
		POSTGRES_USER:     true,
		POSTGRES_PASSWORD: true,
		POSTGRES_DB:       true,
		CLIENT_URL:        true,
		SERVER_PORT:       true,
		RUN_MIGRATION:     true,
	}

	for key := range Config {
		envVal, exists := os.LookupEnv(key)
		if !exists {
			if required[key] {
				log.Fatal(key + " not found in env")
			}
			continue
		}
		if _, ok := Config[key]; ok {
			Config[key] = envVal
		}
	}

	log.Info("All config & secrets set")
}
