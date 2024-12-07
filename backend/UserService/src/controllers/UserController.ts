import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";
import { BaseController } from "./BaseController";

export class UserController extends BaseController {
  private userModel: UserModel;

  constructor() {
    super();
    this.userModel = new UserModel();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userModel.createUser(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const user = await this.userModel.getUserById(id);
      if (!user) {
        res.status(404).json({ success: false, message: "User not found" });
        return;
      }
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getChildHouseUsers(req: Request, res: Response): Promise<void> {
    try {
      const childHouseId = parseInt(req.params.childHouseId, 10);
      const users = await this.userModel.getChildHouseUsers(childHouseId);
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const user = await this.userModel.updateUser(id, req.body);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const user = await this.userModel.deleteUser(id);
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
