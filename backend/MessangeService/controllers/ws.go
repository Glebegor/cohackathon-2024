package controllers

import (
	"fmt"
	bootstrap "hackathon-messages/bootstrap"
	"hackathon-messages/domain/common"
	"hackathon-messages/domain/entities"
	"hackathon-messages/usecase"
	"time"

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
	router.GET("/sockets/:receiver_id", wsController.HandleConnection)
}

func (wsController *WsController) HandleConnection(ctx *gin.Context) {
	fmt.Println("Client connected")

	// Upgrade the connection to WebSocket
	conn, err := wsController.upgrader.Upgrade(ctx.Writer, ctx.Request, nil)
	if err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}
	defer func() {
		conn.Close()
		fmt.Println("Connection closed")
	}()

	// Set a ping/pong handler to keep the connection alive
	conn.SetPongHandler(func(appData string) error {
		fmt.Println("Pong received")
		return nil
	})

	// Start a goroutine to send periodic pings
	go wsController.keepConnectionAlive(conn)

	wsController.HandleMessages(ctx, conn)
}

func (wsController *WsController) HandleMessages(ctx *gin.Context, conn *websocket.Conn) {
	fmt.Println("Handling messages")
	for {
		var input entities.Message

		// Read JSON message from client
		if err := conn.ReadJSON(&input); err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				fmt.Printf("Unexpected close error: %v\n", err)
			} else {
				fmt.Printf("Read error: %v\n", err)
			}
			break
		}

		// Log the received message (for debugging)
		fmt.Printf("Message received: %+v\n", input)

		if input.Date == "" {
			input.Date = fmt.Sprintf("%d", time.Now().Unix())
		}

		// Save the message using the use case
		err := wsController.usecase.SaveMessage(input)
		if err != nil {
			fmt.Printf("Error saving message: %v\n", err)
		}
	}
	fmt.Println("Client disconnected")
}

func (wsController *WsController) keepConnectionAlive(conn *websocket.Conn) {
	for {
		// Send a ping every 30 seconds to keep the connection alive
		if err := conn.WriteMessage(websocket.PingMessage, []byte{}); err != nil {
			fmt.Printf("Error sending ping: %v\n", err)
			break
		}

		time.Sleep(30 * time.Second)
	}
}
