package bootstrap

import (
	"go.mongodb.org/mongo-driver/mongo"
)

type Application struct {
	Config *Config
	Db     *mongo.Database
}

func NewApplication() *Application {
	app := &Application{}

	config, err := NewConfig()
	if err != nil {
		panic(err)
	}

	app.Config = config

	db, err := connectDB(*config)
	if err != nil {
		panic(err)
	}

	app.Db = db

	return app
}
