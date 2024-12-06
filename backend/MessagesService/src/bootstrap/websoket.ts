

// const io = new Server(server, {
//     path: "/api/v2/socket", // WebSocket endpoint
//     cors: {
//         origin: "*", // Replace "*" with your frontend's URL in production
//         methods: ["GET", "POST"],
//     },
// });

import path from "path";
import { Server } from "socket.io";
import { connectionRequest, createMessageRequest } from "../domain/common/requests";

function websocketInit(server: any) {
    const io = new Server(server, {
        path: "/api/v2/socket", // WebSocket endpoint
        cors: {
            origin: "*", // Replace "*" with your frontend's URL in production
            methods: ["GET", "POST"],
        },
    });
    io.on("connection", (socket) => {
        console.log("New WebSocket connection");
            
        socket.on("join", (data: connectionRequest) => {
            console.log("User joined", data);
        });

        socket.on("message", (data: createMessageRequest) => {
            console.log("New message", data);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected");
        });
    });
}

export {websocketInit};