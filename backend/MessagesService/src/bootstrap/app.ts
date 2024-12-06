import * as express from 'express';
import * as mongodb from 'mongodb';
import Config from '../domain/common/config';
import newConfig from './config';

class Application {
    public config: Config;
    public app: express.Application;
    public mongoClient: mongodb.MongoClient;

    constructor() {
        this.app = express();
        this.config = newConfig();
}