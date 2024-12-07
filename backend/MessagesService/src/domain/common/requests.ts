
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

interface getChatsIdsRequest {
    access_token: string;
    user_id: string;
}

export { createMessageRequest, getLast10MessagesRequest, connectionRequest, getChatsIdsRequest };