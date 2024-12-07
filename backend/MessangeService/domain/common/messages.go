package common

import (
	"hackathon-messages/domain/entities"

	"github.com/gin-gonic/gin"
)

type MessagesController interface {
	SetupRouter(gin *gin.Engine)
	GetLast10Messages(ctx *gin.Context)
	GetChatIds(ctx *gin.Context)
}

type MessagesUsecase interface {
	GetLast10Messages(input entities.Get10LastRequest) ([]entities.Message, error)
	GetChatIds(input entities.GetChatIdsRequest) ([]string, error)
}

type MessagesRepository interface {
	GetLast10Messages(input entities.Get10LastRequest) ([]entities.Message, error)
	GetChatIds(input entities.GetChatIdsRequest) ([]string, error)
}
