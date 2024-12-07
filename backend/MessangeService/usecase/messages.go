package usecase

import (
	"hackathon-messages/domain/entities"
	"hackathon-messages/repository"

	"go.mongodb.org/mongo-driver/mongo"
)

type MessageUsecase struct {
	repository *repository.MessageRepository
}

func NewMessageUsecase(db *mongo.Database) *MessageUsecase {
	return &MessageUsecase{}
}

func (u *MessageUsecase) GetLast10Messages(input entities.Get10LastRequest) ([]entities.Message, error) {
	return u.repository.GetLast10Messages(input)
}

func (u *MessageUsecase) GetChatIds(input entities.GetChatIdsRequest) ([]string, error) {
	return u.repository.GetChatIds(input)
}
