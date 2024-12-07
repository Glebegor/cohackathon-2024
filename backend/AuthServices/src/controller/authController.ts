import { PrismaClient } from "@prisma/client";
import Config from "../domain/common/config";
import { IAuthRepository, newAuthRepository } from "../repositoryes/authRepository";
import { IAuthUsecase, newAuthUsecase } from "../usecases/authUsecase";
import express from 'express';
import { RegisterRequest } from "../domain/common/requests";
import { ErrorResponse, SuccessResponse } from "../domain/common/responses";

class ControllerAuth {
    public config: Config;
    public usecase: IAuthUsecase;

    constructor(config: Config, prismaClient: PrismaClient) {
        this.config = config;

        var repo: IAuthRepository = newAuthRepository(prismaClient);
        var usecase: IAuthUsecase = newAuthUsecase(repo);
        this.usecase = usecase;

        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.refresh = this.refresh.bind(this);
        this.verify = this.verify.bind(this);
        this.approve = this.approve.bind(this);
        
    }

    // This method is for user registration
    async register(req: any, res: any) {
        var input: RegisterRequest = req.body;

        var err = await this.usecase.register(input);


        if (err) {
            var errorResponse: ErrorResponse = {
                error: err,
                status: 400,
            }
            res.status(400).send(errorResponse);
        } else {
            var successResponse: SuccessResponse = {
                status: 200,
                message: 'User registered successfully',
                data: {},
            }
            res.status(200).send(successResponse);
        }
    }

    // This method is for user login
    async login(req: any, res: any) {
    
    }


    // This method is for refreshing the token
    async refresh(req: any, res: any) {
    
    }

    // This method is for verifying the token
    async verify(req: any, res: any) {
    
    }

    // This method is for approving the token
    async approve(req: any, res: any) {
    }

    routes(router: express.Router, routeString: string): void {
        router.post(routeString + '/register', this.register);
        router.post(routeString + '/login', this.login);
        router.post(routeString + '/refresh', this.refresh);
        router.post(routeString + '/verify', this.verify);
        router.post(routeString + '/approve', this.approve);
    }
}

export default ControllerAuth;