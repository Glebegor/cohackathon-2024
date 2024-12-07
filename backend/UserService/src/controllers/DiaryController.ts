import { Request, Response } from "express";
import { DiaryModel } from "../models/DiaryModel";
import { BaseController } from "./BaseController";

export class DiaryController extends BaseController {
  private childHouseModel: DiaryModel;

  constructor() {
    super();
    this.childHouseModel = new DiaryModel();
  }

  async createDiary(req: Request, res: Response): Promise<void> {
    try {
      const diary = await this.childHouseModel.createDiary(req.body);
      res.status(201).json({ success: true, data: diary });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getDiaryById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const diary = await this.childHouseModel.getDiaryById(id);
      if (!diary) {
        res.status(404).json({ success: false, message: "Diary not found" });
        return;
      }
      res.status(200).json({ success: true, data: diary });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async getSharedDiaryByUserId(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id, 10);
      const sharedDiaries = await this.childHouseModel.getSharedDiaryByUserId(userId);
  
      if (!sharedDiaries || sharedDiaries.length === 0) {
        res.status(404).json({ success: false, message: "No shared diaries found for this user" });
        return;
      }
  
      res.status(200).json({ success: true, data: sharedDiaries });
    } catch (error) {
      this.handleError(error, res);
    }
  }
  
  async getDiaryByUserId(req: Request, res: Response): Promise<void> {
    try {
      const userId = parseInt(req.params.id, 10);
      const diaries = await this.childHouseModel.getDiaryByUserId(userId);
  
      if (!diaries || diaries.length === 0) {
        res.status(404).json({ success: false, message: "No diaries found for this user" });
        return;
      }
  
      res.status(200).json({ success: true, data: diaries });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async updateDiary(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const diary = await this.childHouseModel.updateDiary(id, req.body);
      res.status(200).json({ success: true, data: diary });
    } catch (error) {
      this.handleError(error, res);
    }
  }

  async deleteDiary(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      const diary = await this.childHouseModel.deleteDiary(id);
      res.status(200).json({ success: true, data: diary });
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
