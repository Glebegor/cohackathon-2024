package entities

import "go.mongodb.org/mongo-driver/bson/primitive"

type Message struct {
	Id         primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	SenderId   string             `bson:"sender_id" json:"sender_id"`
	ReceiverId string             `bson:"receiver_id" json:"receiver_id"`
	Message    string             `bson:"message" json:"message"`
	Date       string             `bson:"date" json:"date"`
}
