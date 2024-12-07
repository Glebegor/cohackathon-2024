package controllers

import (
	"fmt"
	bootstrap "hackathon-messages/bootstrap"
	"hackathon-messages/domain/common"
	"hackathon-messages/domain/entities"
	"hackathon-messages/usecase"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"go.mongodb.org/mongo-driver/mongo"
)

type WsController struct {
	usecase  common.WsUsecase
	config   *bootstrap.Config
	upgrader websocket.Upgrader
}

func NewWsController(db *mongo.Database, config *bootstrap.Config, upgrader websocket.Upgrader) common.WsController {
	usecasee := usecase.NewWsUsecase(db)
	return &WsController{
		usecase:  usecasee,
		config:   config,
		upgrader: upgrader,
	}
}
func (wsController *WsController) SetupRouter(router *gin.Engine) {
	router.GET("", wsController.HandleConnection)
}

// Connection handler
func (wsController *WsController) HandleConnection(ctx *gin.Context) {
	fmt.Println("Client connected")
	conn, err := wsController.upgrader.Upgrade(ctx.Writer, ctx.Request, nil)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}
	defer conn.Close()

	go wsController.HandleMessages(ctx, conn)
}

func (wsController *WsController) HandleMessages(ctx *gin.Context, conn *websocket.Conn) {
	fmt.Println("Handling messages")
	for {
		var input entities.Message
		if err := conn.ReadJSON(&input); err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				fmt.Printf("error: %v\n", err)
			}
			break
		}

		err := wsController.usecase.SaveMessage(input)
		if err != nil {
			ctx.JSON(500, gin.H{"error": err.Error()})
			return
		}
	}
	fmt.Println("Client disconnected")
}
