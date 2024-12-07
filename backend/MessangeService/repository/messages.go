package repository

import (
	"context"
	"hackathon-messages/domain/common"
	"hackathon-messages/domain/entities"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type MessageRepository struct {
	db *mongo.Database
}

func NewMessageRepository(db *mongo.Database) common.MessagesRepository {
	return &MessageRepository{db: db}
}

func (r *MessageRepository) GetLast10Messages(input entities.Get10LastRequest) ([]entities.Message, error) {
	collection := r.db.Collection("messages")
	filter := bson.M{
		"$or": []bson.M{
			{"sender_id": input.SenderId, "receiver_id": input.ReceiverId},
			{"sender_id": input.SenderId, "receiver_id": input.ReceiverId},
		},
	}
	opts := options.Find().SetSort(bson.D{{Key: "timestamp", Value: -1}}).SetLimit(10)
	cursor, err := collection.Find(context.Background(), filter, opts)
	if err != nil {
		return nil, err
	}
	defer cursor.Close(context.Background())

	var messages []entities.Message
	if err = cursor.All(context.Background(), &messages); err != nil {
		return nil, err
	}
	return messages, nil
}

func (r *MessageRepository) GetChatIds(input entities.GetChatIdsRequest) ([]string, error) {
	collection := r.db.Collection("messages")
	filter := bson.M{
		"$or": []bson.M{
			{"sender_id": input.SenderId},
			{"receiver_id": input.SenderId},
		},
	}
	cursor, err := collection.Distinct(context.Background(), "receiver_id", filter)
	if err != nil {
		return nil, err
	}

	var chatIds []string
	for _, id := range cursor {
		chatIds = append(chatIds, id.(string))
	}

	return chatIds, nil
}
