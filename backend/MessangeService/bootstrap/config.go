package bootstrap

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/spf13/viper"
)

type Config struct {
	Db_post_username string
	Db_post_password string
	Db_post_host     string
	Db_post_port     string
	Db_post_name     string

	Db_mongo_username string
	Db_mongo_password string
	Db_mongo_host     string
	Db_mongo_port     string
	Db_mongo_name     string

	Server_port   string
	Server_host   string
	Server_secret string
}

func NewConfig() (*Config, error) {
	config := &Config{}

	viper.SetConfigName("config")
	viper.AddConfigPath(".")
	viper.SetConfigType("yml")

	if err := viper.ReadInConfig(); err != nil {
		return nil, err
	}

	if err := godotenv.Load(); err != nil {
		return nil, err
	}

	config.Db_post_username = viper.GetString("db.postgres.username")
	config.Db_post_host = viper.GetString("db.postgres.host")
	config.Db_post_port = viper.GetString("db.postgres.port")
	config.Db_post_name = viper.GetString("db.postgres.name")

	config.Db_mongo_username = viper.GetString("db.mongo.username")
	config.Db_mongo_host = viper.GetString("db.mongo.host")
	config.Db_mongo_port = viper.GetString("db.mongo.port")
	config.Db_mongo_name = viper.GetString("db.mongo.name")

	config.Server_port = viper.GetString("server.port")
	config.Server_host = viper.GetString("server.host")

	config.Db_mongo_password = os.Getenv("DB_MONGO_PASSWORD")
	config.Db_post_password = os.Getenv("DB_POSTGRES_PASSWORD")
	config.Server_secret = os.Getenv("SECRET_KEY")

	return config, nil
}
