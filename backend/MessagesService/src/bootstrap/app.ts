import * as mongodb from 'mongodb';
import Config from '../domain/common/config';
import newConfig from './config';
import express from 'express';
import CORS from 'cors';

class Application {
    public config: Config;
    public mongoClient: mongodb.MongoClient;
    public app: express.Application = express();

    constructor(enyType: string) {
        this.config = newConfig(enyType);

        this.mongoClient = new mongodb.MongoClient(`mongodb://${this.config.db.mongo.user}:${this.config.db.mongo.password}@${this.config.db.mongo.host}:${this.config.db.mongo.port}`);
        this.pingDb();

        this.app = express();
        this.app.use(express.json());
        this.app.use(CORS());
    }

    run() {
        this.app.listen(this.config.server.port, this.config.server.host, () => {
            console.log(`Server running at http://${this.config.server.host}:${this.config.server.port}/`);
        });    
    }

    printRoutes() {
        this.app._router.stack.forEach(function(r: any) {
            if (r.route && r.route.path) {
                console.log(r.route.path);
            }
        });
    }

    pingDb() {
        this.mongoClient.db(this.config.db.mongo.database).command({ ping: 1 });
    }
};

export default Application;