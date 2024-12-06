import { MongoClient } from "mongodb";
import { createMessageRequest, getLast10MessagesRequest } from "../domain/common/requests";
import { Message } from "../domain/common/message";

interface IRepositoryMessages {
    databaseClient: MongoClient;
    createMessage(input: createMessageRequest): Promise<string>;
    getLast10Messages(input: getLast10MessagesRequest): Promise<Message[]>;
}

function newRepositoryMessages(databaseClient: MongoClient): IRepositoryMessages {
    const repo: IRepositoryMessages = {
        databaseClient: databaseClient,

        // Function that saves a message in the database
        createMessage: async (input: createMessageRequest): Promise<string> => {
            try {
                await databaseClient.db("MessagesService").collection("Messages").insertOne({
                    sender_id: input.sender_id,
                    receiver_id: input.receiver_id,
                    message: input.message,
                    timestamp: new Date(),
                });
                return "Message created";
            } catch (err) {
                console.error("Error creating message:", err);
                throw new Error("Failed to create message");
            }
        },

        // Function that retrieves the last 10 messages between two users
        getLast10Messages: async (input: getLast10MessagesRequest): Promise<Message[]> => {
            try {
                // Set a default timestamp if not provided
                const lastTimestamp = input.last_timestamp || new Date(0);

                const messages: Message[] = (
                    await databaseClient
                        .db("MessagesService")
                        .collection("Messages")
                        .find({
                            $or: [
                                { sender_id: input.sender_id, receiver_id: input.receiver_id },
                                { sender_id: input.receiver_id, receiver_id: input.sender_id },
                            ],
                            timestamp: { $gt: lastTimestamp },
                        })
                        .sort({ timestamp: -1 }) // Ascending order
                        .limit(10) // First 10 messages
                        .toArray()
                ).map((doc) => ({
                    id: doc._id.toString(),
                    sender_id: doc.sender_id,
                    receiver_id: doc.receiver_id,
                    message: doc.message,
                    timestamp: doc.timestamp,
                }));

                return messages;
            } catch (err) {
                console.error("Error getting messages:", err);
                throw new Error("Failed to get messages");
            }
        },
    };
    return repo;
}

export { IRepositoryMessages, newRepositoryMessages };
