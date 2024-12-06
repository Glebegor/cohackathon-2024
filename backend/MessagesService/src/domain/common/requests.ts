
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

export { createMessageRequest, getLast10MessagesRequest, connectionRequest };