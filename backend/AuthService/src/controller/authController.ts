// import { PrismaClient } from "@prisma/client";
import Config from "../domain/common/config";
import { IAuthRepository, newAuthRepository } from "../repositoryes/authRepository";
import { IAuthUsecase, newAuthUsecase } from "../usecases/authUsecase";
import express from 'express';
import { ApproveRequest, LoginRequest, RegisterRequest, VerifyRequest } from "../domain/common/requests";
import { RefreshResponse, LoginResponse, VerifyResponse } from "../domain/common/responses";
import { generateAccessToken, generateRefreshToken, verifyToken } from "../utils/jwt";
import { PrismaClient } from "@prisma/client";
import { Verify } from "crypto";

class ControllerAuth {
    public config: Config;
    public usecase: IAuthUsecase;

    constructor(config: Config, prismaClient: PrismaClient) {
        this.config = config;

        var repo: IAuthRepository = newAuthRepository(prismaClient);
        var usecase: IAuthUsecase = newAuthUsecase(repo);
        this.usecase = usecase;

        this.login = this.login.bind(this);
        this.refresh = this.refresh.bind(this);
        this.verify = this.verify.bind(this);
        this.approve = this.approve.bind(this);

    }


    // This method is for user login
    async login(req: any, res: any) {
        var input: LoginRequest = req.body;

        var user = await this.usecase.login(input);
        if (user == null) {
            var response = {
                error: "Invalid username or password"
            }
            res.status(401).send(response);
        }
        else {
            try {
                var access_token = generateAccessToken(user, this.config.server.secret);
                var refresh_token = generateRefreshToken(user, this.config.server.secret);
            } catch (error) {
                var response = {
                    error: "Error generating token"
                }
                res.status(500).send(response);
            }
           

            var resp: LoginResponse = {
                access_token: access_token,
                refresh_token: refresh_token
            }
            res.status(200).send(resp);
        }
    }

    // This method is for refreshing the token
    async refresh(req: any, res: any) {
        var input: RefreshResponse = req.body;

        try {
            var decoded = verifyToken(input.refresh_token, this.config.server.secret);
        } catch (error) {
            var response = {
                error: "Invalid refresh token"
            }
            res.status(401).send(response);
            return
        }

        if (decoded.id == undefined) {
            var response = {
                error: "Invalid refresh token"
         }
            res.status(401).send(response);
        }
        var user = await this.usecase.findUserById(decoded.id);
        if (user == null) {
            var response = {
                error: "User not found"
            }
            res.status(401).send(response);
        }

        try {
            var access_token = generateAccessToken(user, this.config.server.secret);
            var refresh_token = generateRefreshToken(user, this.config.server.secret);   
        } catch (error) {
            var response = {
                error: "Error generating token"
            }
            res.status(500).send(response);
            return

        }
        

        var resp: LoginResponse = {
            access_token: access_token,
            refresh_token: refresh_token
        }
        res.status(200).send(resp);
    }

    // This method is for verifying the token
    async verify(req: any, res: any) {
        var input: VerifyRequest = req.body;

        try {
            var decoded = verifyToken(input.access_token, this.config.server.secret);
        } catch (error) {
            var response = {
                error: "Invalid access token"
            }
            res.status(401).send(response);
            return
        }

        if (decoded.id == undefined) {
            var response = {
                error: "Invalid access token"
            }
            res.status(401).send(response);
        }

        var user = await this.usecase.findUserById(decoded.id);
        if (user == null) {
            var response = {
                error: "User not found"
            }
            res.status(401).send(response);
        }

        var resp: VerifyResponse = {
            access_token: input.access_token,
            role_id: user.role_id
        }
        res.status(200).send(resp);
        
    }

    // This method is for approving the token
    async approve(req: any, res: any) {
        var input: ApproveRequest = req.body;

        try {
            var decoded = verifyToken(input.access_token, this.config.server.secret);
        } catch (error) {
            var response = {
                error: "Invalid access token"
            }
            res.status(401).send(response);
            return
        }


        if (decoded.id == undefined) {
            var response = {
                error: "Invalid access token"
            }
            res.status(401).send(response);
        }

        var user = await this.usecase.approveUserById(decoded.id);
        
        var resp: VerifyResponse = {
            access_token: input.access_token,
            role_id: user.role_id
        }
        res.status(200).send(resp);
    }

    routes(router: express.Router, routeString: string): express.Router {
        router.post(routeString + '/login', this.login);
        router.post(routeString + '/refresh', this.refresh);
        router.post(routeString + '/verify', this.verify);
        router.post(routeString + '/approve', this.approve);
        return router;
    }
}

export default ControllerAuth;