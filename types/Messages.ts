interface Message {
    id: number;
    sender_id: number;
    receiver_id: number;
    message: string;
    timestamp: Date;
}

interface MessageRequestInWebSocket {
    sender_id: number;
    receiver_id: number;
    message: string;
    access_token: string;
}

