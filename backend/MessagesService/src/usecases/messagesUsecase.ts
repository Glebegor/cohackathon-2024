import { MongoClient } from "mongodb";
import { IRepositoryMessages } from "../repositoryes/messagesUsecase";



interface IUsecaseMessages {
    repo: IRepositoryMessages;

    // createMessage()
    // deleteMessage()
    // updateMessage()
    // getMessages()
    // getLast10Messages()
}

function newUsecaseMessages(repo: IRepositoryMessages): IUsecaseMessages {
    var usecase: IUsecaseMessages = {
        repo: repo
    };
    return usecase;
}

export { IUsecaseMessages, newUsecaseMessages };