


// test for controller authController

import * as express from 'express';
import Config from '../../domain/common/config';
import { PrismaClient } from '@prisma/client';
import ControllerAuth from '../../controller/authController';


describe('authController', () => {
    let config: Config;
    let prismaClient: PrismaClient;
    let router: express.Router;

    beforeEach(() => {
        config = {   
            server: {
                port: 5001,
                host: "localhost",
                secret: "123321"
            },
            db: {
                postgres: {
                    user: "root",
                    host: "localhost",
                    database: "hackathon-postgres",
                    port: 5200,
                    password: "123321"
                }, 
                mongo: {
                    user: "root",
                    host: "localhost",
                    database: "hackathon-mongo",
                    port: 5100,
                    password: "123321"
                }
            },
            services: {
                messagesServicePort: 5003,
                userServicePort: 5002,
                supportServicePort: 5004
            }
        };

        prismaClient = new PrismaClient();
        router = express.Router();
    });

    it('should return a router', () => {
        const mainRouter = new ControllerAuth(config, prismaClient);
        const result = mainRouter.routes(router, '');

        expect(result).toBe(router);
    });
});