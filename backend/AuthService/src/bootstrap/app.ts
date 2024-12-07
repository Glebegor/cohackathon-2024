import Config from '../domain/common/config';
import newConfig from './config';
import express from 'express';
import CORS from 'cors';
import { PrismaClient } from '@prisma/client';
import MainRouter from './router';

class Application {
    public config: Config;
    public app: express.Application = express();
    public prismaClient: PrismaClient;

    constructor(enyType: string) {
        this.config = newConfig(enyType);

        // Connect to the database
        this.prismaClient = new PrismaClient();
        console.log(process.env.DATABASE_URL);
        this.pingDb().then((message: string) => {
            console.log(message);
        })
        
        // Initialize the application
        this.app = express();
        this.app.use(express.json());
        this.app.use(CORS());

    }

    private pingDb(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.prismaClient.$connect().then(() => {
                resolve('Connected to the database');
            }).catch((error: Error) => {
                reject('Error connecting to the database');
            });
        });
    }

    // This method is running an application
    run() {
        var mainRouter: MainRouter = new MainRouter(this.config, this.prismaClient);

        this.app.use('/api/v2', mainRouter.run());

        this.app.listen(this.config.server.port, () => {
            console.log(`Server is running on port ${this.config.server.port}`);
        });
    }
};

export default Application;