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
            
        },

        // Function that retrieves the last 10 messages between two users
        getLast10Messages: async (data: getLast10MessagesRequest): Promise<Message[]> => {
            
        },

        // Function that retrieves the chat IDs of a user
        getChatsIds: async (data: getChatsIdsRequest): Promise<string[]> => {
            
        },
    };
    return repo;
}

export { IRepositoryMessages, newRepositoryMessages };
