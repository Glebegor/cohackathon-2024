package usecase

import (
	"hackathon-messages/domain/common"
	"hackathon-messages/domain/entities"
	"hackathon-messages/repository"

	"go.mongodb.org/mongo-driver/mongo"
)

type WsUsecase struct {
	repo common.WsRepository
}

func (u *WsUsecase) SaveMessage(input entities.Message) error {
	return u.repo.SaveMessage(input)
}

func NewWsUsecase(db *mongo.Database) common.WsUsecase {
	repo := repository.NewWsRepository(db)
	return &WsUsecase{
		repo: repo,
	}
}
