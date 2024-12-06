import { MongoClient } from "mongodb";
import { createMessageRequest, getChatsIdsRequest, getLast10MessagesRequest } from "../domain/common/requests";
import { Message } from "../domain/common/message";

interface IRepositoryMessages {
    databaseClient: MongoClient;
    createMessage(input: createMessageRequest): Promise<string>;
    getLast10Messages(input: getLast10MessagesRequest): Promise<Message[]>;
    getChatsIds(input: getChatsIdsRequest): Promise<string[]>;
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
                return "";
            } catch (err) {
                console.error("Error creating message:", err);
                throw new Error("Failed to create message");
            }
        },

        // Function that retrieves the last 10 messages between two users
        getLast10Messages: async (data: getLast10MessagesRequest): Promise<Message[]> => {
            try {
                const lastTimestamp = data.last_timestamp ? data.last_timestamp : new Date(0);

                const messages: Message[] = (
                    await databaseClient
                        .db("MessagesService")
                        .collection("Messages")
                        .find({
                            $or: [
                                { sender_id: data.sender_id, receiver_id: data.receiver_id },
                                { sender_id: data.receiver_id, receiver_id: data.sender_id },
                            ],
                            timestamp: { $gt: new Date(0)},
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

        // Function that retrieves the chat IDs of a user
        getChatsIds: async (data: getChatsIdsRequest): Promise<string[]> => {
            try {
                const chatIds: string[] = (
                    await databaseClient
                        .db("MessagesService")
                        .collection("Messages")
                        .distinct("receiver_id", {
                            sender_id: data.user_id,
                        })
                ).concat(
                    await databaseClient
                        .db("MessagesService")
                        .collection("Messages")
                        .distinct("sender_id", {
                            receiver_id: data.user_id,
                        })
                );

                return chatIds;
            } catch (err) {
                console.error("Error getting chat IDs:", err);
                throw new Error("Failed to get chat IDs");
            }
        },
    };
    return repo;
}

export { IRepositoryMessages, newRepositoryMessages };
