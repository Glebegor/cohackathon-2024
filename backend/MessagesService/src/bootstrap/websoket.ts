import path from "path";
import { Server } from "socket.io";
import { connectionRequest, createMessageRequest } from "../domain/common/requests";
import { MongoClient } from "mongodb";
import { Message } from "../domain/common/message";

// WebSocket initialization
function websocketInit(server: any, databaseClient: MongoClient) {
    const io = new Server(server, {
        path: "", // WebSocket endpoint
        cors: {
            origin: "*", // Replace "*" with your frontend's URL in production
            methods: ["GET", "POST"],
        },
    }); 

    io.on("connection", (socket) => {
        console.log("New WebSocket connection");

        // Handle 'join' event
        socket.on("join", (data: connectionRequest) => {
            console.log("User joined", data);
        });

        // Handle 'message' event and save message to MongoDB
        socket.on("message", async (data: createMessageRequest) => {
            console.log("New message", data);

            try {
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

                console.log("Messages found", messages);
            } catch (err) {
                console.error("Error saving message:", err);
                socket.emit("error", "Failed to save message");
            }
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });
}

export {websocketInit};