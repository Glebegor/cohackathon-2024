import { MongoClient } from "mongodb";
import Config from "../domain/common/config";
import IUsecaseMessages from "../usecases/messagesUsecase";

class ControllerMessages {
    public config: Config;
    public usecase: IUsecaseMessages;
    public routeString: string = '/messages';

    constructor(config: Config, databaseClient: MongoClient, ) {
        this.config = config;
        this.usecase =
    }

}