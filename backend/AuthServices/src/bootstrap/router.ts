import * as express from 'express';
import Config from '../domain/common/config';
import { PrismaClient } from '@prisma/client';
import ControllerAuth from '../controller/authController';

class MainRouter {
    public router: express.Router;
    public config: Config;
    public prismaClient: PrismaClient;

    constructor(config: Config, prismaClient: PrismaClient) {
        this.router = express.Router();

        this.config = config;
        this.prismaClient = prismaClient;
    }

    run() {
        // Initialize the auth controller
        var authController: ControllerAuth = new ControllerAuth(this.config, this.prismaClient);

        authController.routes(this.router, "");
        return this.router;
    }
 
}

export default MainRouter;