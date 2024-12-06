import { MongoClient } from "mongodb";
import Config from "../domain/common/config";
import {IUsecaseMessages, newUsecaseMessages } from "../usecases/messagesUsecase";
import { newRepositoryMessages } from "../repositoryes/messagesUsecase";

class ControllerMessages {
    public config: Config;
    public usecase: IUsecaseMessages;
    public routeString: string = '/messages';

    constructor(config: Config, databaseClient: MongoClient) {
        this.config = config;
        this.usecase = newUsecaseMessages(newRepositoryMessages(databaseClient));
    }

    private async createMessage(req: any, res: any): Promise<void> {
        

    }

    private async deleteMessage(req: any, res: any): Promise<void> {

    }

    private async updateMessage(req: any, res: any): Promise<void> {

    }

    private async getMessages(req: any, res: any): Promise<void> {

    }

    private async getLast10Messages(req: any, res: any): Promise<void> {

    }
    
    public routes(router: any): void {
        router.post(this.routeString, this.createMessage);
        router.delete(this.routeString, this.deleteMessage);
        router.put(this.routeString, this.updateMessage);
        router.get(this.routeString + "/:id", this.getMessages);
        router.get(this.routeString + "/last5", this.getLast10Messages);
    }
}

export { ControllerMessages };