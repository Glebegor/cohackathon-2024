import { Request, Response } from "express";
import { ChildHouseModel } from "../models/ChildHouseModel";
import { BaseController } from "./BaseController";
import { RedisClientType } from "redis";
import  connRedisCli  from "../database/redis";
import { Config, newConfig } from "../config/config";

export class ChildHouseController extends BaseController {
  private childHouseModel: ChildHouseModel;
  private connectedRedisClient: any; 
  private config: Config;

  constructor() {
    super();
    this.config = newConfig();
    this.connectedRedisClient = connRedisCli;
    this.childHouseModel = new ChildHouseModel(this.connectedRedisClient);
  }

  async createChildHouse(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body)
      const childHouse = await this.childHouseModel.createChildHouse(req.body);
      console.log(req.body)
      res.status(201).json({ success: true, data: childHouse });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getChildHouseById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const childHouse = await this.childHouseModel.getChildHouseById(id);
      if (!childHouse) {
        res.status(404).json({ success: false, message: "Child house not found" });
        return;
      }
      res.status(200).json({ success: true, data: childHouse });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getAllChildHouses(req: Request, res: Response): Promise<void> {
    try {
      const childHouses = await this.childHouseModel.getAllChildHouses();
      res.status(200).json({ success: true, data: childHouses });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async updateChildHouse(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const childHouse = await this.childHouseModel.updateChildHouse(id, req.body);
      res.status(200).json({ success: true, data: childHouse });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async deleteChildHouse(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const childHouse = await this.childHouseModel.deleteChildHouse(id);
      res.status(200).json({ success: true, data: childHouse });
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
