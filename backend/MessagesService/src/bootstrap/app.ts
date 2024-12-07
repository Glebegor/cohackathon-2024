import * as mongodb from 'mongodb';
import Config from '../domain/common/config';
import newConfig from './config';
import express from 'express';
import CORS from 'cors';
import { MainRouter } from './router';
import { Server } from 'socket.io';
import http from 'http';
import {websocketInit} from './websoket';

class Application {
    public config: Config;
    public mongoClient: mongodb.MongoClient;
    public app: express.Application = express();
    public router: MainRouter;
    public server: any;

    constructor(enyType: string) {
        this.config = newConfig(enyType);

        // Connect to the database
        this.mongoClient = new mongodb.MongoClient(`mongodb://${this.config.db.mongo.user}:${this.config.db.mongo.password}@${this.config.db.mongo.host}:${this.config.db.mongo.port}`);
        this.mongoClient.connect();

        // Initialize the router
        this.router = new MainRouter(this.config, this.mongoClient);
        
        // Initialize the application
        this.app = express();
        this.app.use(express.json());
        this.app.use(CORS());

    }

    // This method is running an application
    run() {
        this.app.use("/api/v2", this.router.router);
        
        this.printRoutes();
        this.server = http.createServer(this.app);
        
        // Initialize the WebSocket
        websocketInit(this.server, this.mongoClient);
        console.log('WS /');

        this.server.listen(this.config.server.port, this.config.server.host, () => {
            console.log(`Server running at http://${this.config.server.host}:${this.config.server.port}/`);
        });
    }

    printRoutes() {
        console.log('Routes:');
        this.router.router.stack.forEach((r: any) => {
            if (r.route && r.route.path) {
                console.log(`${Object.keys(r.route.methods).join(', ').toUpperCase()} /api/v2${r.route.path}`);
            }
        });
    }
};

export default Application;