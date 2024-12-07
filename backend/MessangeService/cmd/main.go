package main

import (
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
	"github.com/sirupsen/logrus"

	bootstrap "hackathon-messages/bootstrap"
	"hackathon-messages/controllers"
)

func main() {
	println("messageService!")
	logrus.SetFormatter(&logrus.JSONFormatter{})
	app := bootstrap.NewApplication()
	config := app.Config
	db := app.Db

	gin := gin.Default()

	controllers.SetupRouter(gin, db, config)
	gin.Run(config.Server_host + ":" + config.Server_port)
}
