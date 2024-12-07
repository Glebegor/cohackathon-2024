package bootstrap

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func connectDB(config Config) (*mongo.Database, error) {
	mongoURL := "mongodb://" + config.Db_mongo_username + ":" + config.Db_post_password + "@" + config.Db_mongo_host + ":" + config.Db_mongo_port

	clientOptions := options.Client().ApplyURI(mongoURL)

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatal("Error connecting to MongoDB:", err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal("Error pinging MongoDB:", err)
	}
	fmt.Println("Connected to MongoDB!")

	db := client.Database(config.Db_mongo_name)

	defer cancel()

	return db, nil
}
