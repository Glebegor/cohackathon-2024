package controllers

import (
	"hackathon-messages/bootstrap"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"go.mongodb.org/mongo-driver/mongo"
)

func upgraderInit() websocket.Upgrader {
	var upgrader = websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	return upgrader
}

func SetupRouter(gin *gin.Engine, db *mongo.Database, config *bootstrap.Config) {

	// Controllers initialization
	controllerMessage := NewMessageController(db, config)
	controllerMessage.SetupRouter(gin)

	upgrader := upgraderInit()
	controllerWebSockets := NewWsController(db, config, upgrader)
	controllerWebSockets.SetupRouter(gin)
}
