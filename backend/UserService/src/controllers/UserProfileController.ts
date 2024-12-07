import { Request, Response } from "express";
import { UserProfileModel } from "../models/UserProfileModel";
import { BaseController } from "./BaseController";
import { Config, newConfig } from "../config/config";
import { createClient, RedisClientType } from "redis";

export class UserProfileController extends BaseController {
  private userProfileModel: UserProfileModel;
  private config: Config;
  private redisClient: RedisClientType;

  constructor() {
    super();
    this.config = newConfig();
    this.redisClient = createClient();
    this.userProfileModel = new UserProfileModel();
  }

  async createUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const profile = await this.userProfileModel.createUserProfile(req.body);
      res.status(201).json({ success: true, data: profile });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getUserProfileById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const profile = await this.userProfileModel.getUserProfileById(id);
      if (!profile) {
        res.status(404).json({ success: false, message: "Profile not found" });
        return;
      }
      res.status(200).json({ success: true, data: profile });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async updateUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const profile = await this.userProfileModel.updateUserProfile(id, req.body);
      res.status(200).json({ success: true, data: profile });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async deleteUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const profile = await this.userProfileModel.deleteUserProfile(id);
      res.status(200).json({ success: true, data: profile });
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
