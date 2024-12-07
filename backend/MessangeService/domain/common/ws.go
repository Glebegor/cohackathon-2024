package common

import (
	"hackathon-messages/domain/entities"

	"github.com/gin-gonic/gin"
)

type WsController interface {
	SetupRouter(gin *gin.Engine)
}

type WsUsecase interface {
	SaveMessage(input entities.Message) error
}

type WsRepository interface {
	SaveMessage(input entities.Message) error
}
