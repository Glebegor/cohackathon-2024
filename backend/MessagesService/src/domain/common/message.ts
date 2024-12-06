interface Message {
    id: string;
    sender_id: number;
    receiver_id: number;
    message: string;
    timestamp: Date;
}

export { Message };