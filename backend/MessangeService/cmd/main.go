package main

import (
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
	"github.com/sirupsen/logrus"

	bootstrap "hackathon-messages/bootstrap"
	"hackathon-messages/controllers"
)

func main() {
	logrus.SetFormatter(&logrus.JSONFormatter{})
	app := bootstrap.NewApplication()
	config := app.Config
	db := app.Db
	mq := app.AmqpConnection

	gin := gin.Default()

	controllers.SetupRouter(gin, db, config, mq)
	gin.Run(config.Server_host + ":" + config.Server_port)
}
