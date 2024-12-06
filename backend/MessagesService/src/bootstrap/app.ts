import * as express from 'express';
import * as mongodb from 'mongodb';
class Application {
    public config: Config;
    public app: express.Application;
    public mongoClient: mongodb.MongoClient;

    constructor() {
        this.app = express();
        this.config = {
            } 
}