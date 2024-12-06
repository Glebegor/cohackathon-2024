import { Request, Response } from "express";
import { ChildHouseModel } from "../models/ChildHouseModel";
import { BaseController } from "./BaseController";

export class ChildHouseController extends BaseController {
  private childHouseModel: ChildHouseModel;

  constructor() {
    super();
    this.childHouseModel = new ChildHouseModel();
  }

  async createChildHouse(req: Request, res: Response): Promise<void> {
    try {
      const childHouse = await this.childHouseModel.createChildHouse(req.body);
      res.status(201).json({ success: true, data: childHouse });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getChildHouseById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
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
