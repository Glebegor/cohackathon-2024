import { MongoClient } from "mongodb";
import Config from "../domain/common/config";
import {IUsecaseMessages, newUsecaseMessages } from "../usecases/messagesUsecase";
import { IRepositoryMessages, newRepositoryMessages } from "../repositoryes/messagesRepository";
import { createMessageRequest, getChatsIdsRequest } from "../domain/common/requests";
import { ErrorResponse, SuccessResponse } from "../domain/common/responses";
import { Message } from "../domain/common/message";

class ControllerMessages {
    public config: Config;
    public usecase: IUsecaseMessages;
    public routeString: string = '/messages';

    constructor(config: Config, databaseClient: MongoClient) {
        this.config = config;
        var repo: IRepositoryMessages = newRepositoryMessages(databaseClient);
        this.usecase = newUsecaseMessages(repo);
        
        this.createMessage = this.createMessage.bind(this);
        this.getLast10Messages = this.getLast10Messages.bind(this);
    }

    private async createMessage(req: any, res: any): Promise<void> {
        var input: createMessageRequest = req.body;

        var err: string = await this.usecase.createMessage(input);

        if (err != "") {
            var responseError: ErrorResponse = {
                status: 400,
                error: err
            }
            res.status(400).send(responseError);
        } else {
            var responseSuccess: SuccessResponse = {
                status: 200,
                message: "Message created",
                data: {}
            }
            res.status(200).send(responseSuccess);
        }
    }


    private async getLast10Messages(req: any, res: any): Promise<void> {
        var input = req.body;

        var messages: Message[] = await this.usecase.getLast10Messages(input);

        if (messages.length == 0 ){ 
            var responseError: ErrorResponse = {
                status: 400,
                error: "No messages found"
            }
            res.status(400).send(responseError);
        }
        else {
            var responseSuccess: SuccessResponse = {
                status: 200,
                message: "Messages found",
                data: messages
            }
            res.status(200).send(responseSuccess);
        }
    }
    private async getChatsIds(req: any, res: any): Promise<void> {
        var input: getChatsIdsRequest = req.body;
        
        var chatsIds: string[] = await this.usecase.getChatIds(input);

        if (chatsIds.length == 0) {
            var responseError: ErrorResponse = {
                status: 400,
                error: "No chats found"
            }
            res.status(400).send(responseError);
        }
        else {
            var responseSuccess: SuccessResponse = {
                status: 200,
                message: "Chats found",
                data: chatsIds
            }
            res.status(200).send(responseSuccess);
        }
    }
    
    public routes(router: any): void {
        router.post(this.routeString, this.createMessage);
        router.get(this.routeString, this.getLast10Messages);
        router.get(this.routeString + "/getChatIds", this.getChatsIds);
    }
}

export { ControllerMessages };