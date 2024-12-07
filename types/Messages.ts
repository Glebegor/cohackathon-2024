interface Message {
    id: string;
    sender_id: number;
    receiver_id: number;
    message: string;
    timestamp: Date;
}


interface createMessageRequest {
    access_token: string;
    sender_id: string;
    receiver_id: string;
    message: string;
}

interface connectionRequest {
    access_token: string;
    sender_id: string;
    receiver_id: string;
}

interface getLast10MessagesRequest {
    access_token: string;
    sender_id: string;
    receiver_id: string;
    last_timestamp: Date | undefined;
}
