import { MongoClient } from "mongodb";
import { IRepositoryMessages, newRepositoryMessages } from "../repositoryes/messagesRepository";
import { createMessageRequest, getChatsIdsRequest, getLast10MessagesRequest } from "../domain/common/requests";
import { Message } from "../domain/common/message";



interface IUsecaseMessages {
    repo: IRepositoryMessages;

    createMessage(input: createMessageRequest): Promise<string>;
    getLast10Messages(input: getLast10MessagesRequest): Promise<Message[]>;
    getChatIds(input: getChatsIdsRequest): Promise<string[]>;
}


function newUsecaseMessages(repo: IRepositoryMessages): IUsecaseMessages {
    var usecase: IUsecaseMessages = {
        repo: repo,
        createMessage: async (input: createMessageRequest): Promise<string> => {
            var err: Promise<string> = repo.createMessage(input);
            return err;
        },
        getLast10Messages: async (input: getLast10MessagesRequest): Promise<Message[]> => {
            var messages: Promise<Message[]> = repo.getLast10Messages(input);
            return messages;
        },
        getChatIds: async (input: getChatsIdsRequest): Promise<string[]> => {
            var chatIds: Promise<string[]> = repo.getChatsIds(input);
            return chatIds;
        }
    };
    return usecase;
}

export { IUsecaseMessages, newUsecaseMessages };