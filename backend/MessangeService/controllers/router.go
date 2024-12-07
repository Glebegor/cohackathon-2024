package controllers

import (
	"hackathon-messages/bootstrap"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
)

func SetupRouter(gin *gin.Engine, db mongo.Database, config *bootstrap.Config) {

	// Controllers initialization
	controllerMessage := NewMessageController(db, config)
	controllerMessage.SetupRouter(gin)
}
