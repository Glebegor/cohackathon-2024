package controllers

import (
	bootstrap "hackathon-messages/bootstrap"
	common "hackathon-messages/domain/common"
	"hackathon-messages/domain/entities"
	"hackathon-messages/middleware"
	"hackathon-messages/usecase"

	"github.com/gin-gonic/gin"
	"github.com/streadway/amqp"
	"go.mongodb.org/mongo-driver/mongo"
)

type MessageController struct {
	config  *bootstrap.Config
	usecase common.MessagesUsecase
	mq      *amqp.Connection
}

func NewMessageController(db *mongo.Database, config *bootstrap.Config, mq *amqp.Connection) common.MessagesController {
	usecase := usecase.NewMessageUsecase(db)
	return &MessageController{config: config, usecase: usecase, mq: mq}
}

func (c *MessageController) SetupRouter(gin *gin.Engine) {
	gin.GET("/messages", c.GetLast10Messages)
	gin.GET("/messages/chats", c.GetChatIds)
}

func (c *MessageController) GetLast10Messages(ctx *gin.Context) {
	var input entities.Get10LastRequest

	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}
	middleware.VerificationOfTheTokenMiddleWare(ctx, c.config)

	messages, err := c.usecase.GetLast10Messages(input)
	if err != nil {
		ctx.JSON(500, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(200, map[string]interface{}{"status": 200, "data": messages})
}

func (c *MessageController) GetChatIds(ctx *gin.Context) {
	var input entities.GetChatIdsRequest

	if err := ctx.ShouldBindJSON(&input); err != nil {
		ctx.JSON(400, gin.H{"error": err.Error()})
		return
	}

	chatIds, err := c.usecase.GetChatIds(input)

	if err != nil {
		ctx.JSON(500, gin.H{"error": err.Error()})
		return
	}

	ctx.JSON(200, map[string]interface{}{"status": 200, "data": chatIds})
}
