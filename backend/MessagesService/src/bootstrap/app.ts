import * as mongodb from 'mongodb';
import Config from '../domain/common/config';
import newConfig from './config';
import express from 'express';
import CORS from 'cors';
import { MainRouter } from './router';

class Application {
    public config: Config;
    public mongoClient: mongodb.MongoClient;
    public app: express.Application = express();

    constructor(enyType: string) {
        this.config = newConfig(enyType);

        this.mongoClient = new mongodb.MongoClient(`mongodb://${this.config.db.mongo.user}:${this.config.db.mongo.password}@${this.config.db.mongo.host}:${this.config.db.mongo.port}`);

        this.app = express();
        this.app.use(express.json());
        this.app.use(CORS());
    }

    // This method is running an application
    run() {
        this.app.use("api/v2/",new MainRouter(this.config, this.mongoClient).router)

        this.printRoutes();
        this.app.listen(this.config.server.port, this.config.server.host, () => {
            console.log(`Server running at http://${this.config.server.host}:${this.config.server.port}/`);
        });    
    }

    printRoutes() {
        console.log('Routes:');
        this.app._router.stack.forEach((middleware: any) => {
            console.log(middleware.route);
        });
    }
};

export default Application;