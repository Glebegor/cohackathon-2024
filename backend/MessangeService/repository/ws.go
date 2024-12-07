package repository

import (
	"hackathon-messages/domain/common"
	"hackathon-messages/domain/entities"

	"go.mongodb.org/mongo-driver/mongo"
)

type WsRepository struct {
	db *mongo.Database
}

// SaveMessage implements common.WsRepository.

func NewWsRepository(db *mongo.Database) common.WsRepository {
	return &WsRepository{
		db: db,
	}
}

func (r *WsRepository) SaveMessage(input entities.Message) error {
	collection := r.db.Collection("messages")
	_, err := collection.InsertOne(nil, input)
	if err != nil {
		return err
	}
	return nil
}
