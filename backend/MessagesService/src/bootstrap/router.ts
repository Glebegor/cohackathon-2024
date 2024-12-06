import { Router } from "express";
import Config from "../domain/common/config";
import { MongoClient } from "mongodb";
import { ControllerMessages } from "../controller/messagesController";


class MainRouter {
    public router: Router;
    public config: Config;
    public mongoClient: MongoClient;

    constructor(config: Config, mongoClient: MongoClient) {
        this.router = Router();
        this.config = config;
        this.mongoClient = mongoClient;
        this.init();
    }

    private init() {
        this.router.use("", new ControllerMessages(this.config, this.mongoClient).routes);
    }
}

export {MainRouter};