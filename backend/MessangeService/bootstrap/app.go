package bootstrap

import (
	"github.com/streadway/amqp"
	"go.mongodb.org/mongo-driver/mongo"
)

type Application struct {
	Config         *Config
	Db             *mongo.Database
	AmqpConnection *amqp.Connection
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

	conn, err := amqp.Dial("amqp://" + config.Rabbitmq_username + ":" + config.Rabbitmq_password + "@" + config.Rabbitmq_host + ":" + config.Rabbitmq_port + "/")
	if err != nil {
		panic(err)
	}
	app.AmqpConnection = conn
	return app
}
