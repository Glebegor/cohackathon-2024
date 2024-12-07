package usecase

import (
	"hackathon-messages/domain/common"
	"hackathon-messages/domain/entities"
	"hackathon-messages/repository"

	"go.mongodb.org/mongo-driver/mongo"
)

type MessageUsecase struct {
	repo common.MessagesRepository
}

func NewMessageUsecase(db *mongo.Database) common.MessagesUsecase {
	repos := repository.NewMessageRepository(db)
	return &MessageUsecase{
		repo: repos,
	}
}

func (u *MessageUsecase) GetLast10Messages(input entities.Get10LastRequest) ([]entities.Message, error) {
	return u.repo.GetLast10Messages(input)
}

func (u *MessageUsecase) GetChatIds(input entities.GetChatIdsRequest) ([]string, error) {
	return u.repo.GetChatIds(input)
}
