import { Request, Response } from "express";
import { DiaryController } from "../../controllers/DiaryController";
import { DiaryModel } from "../../models/DiaryModel";

jest.mock("../../models/DiaryModel");

describe("DiaryController", () => {
  let diaryController: DiaryController;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let diaryModelMock: jest.Mocked<DiaryModel>;

  beforeEach(() => {
    diaryController = new DiaryController();
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    diaryModelMock = DiaryModel.prototype as jest.Mocked<DiaryModel>;
  });

  describe("createDiary", () => {
    it("should create a diary and return 201 status", async () => {
      const mockDiary = {
        id: 1,
        user_id: 1,
        emotion: "happy", 
        note: "Test diary content", 
        createdAt: new Date(),
        shared: false,
      };
      diaryModelMock.createDiary.mockResolvedValue(mockDiary);

      req.body = {
        user_id: 1,
        content: "Test content",
      };

      await diaryController.createDiary(req as Request, res as Response);

      expect(diaryModelMock.createDiary).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockDiary });
    });

    it("should handle errors", async () => {
      const error = new Error("Internal server error");
      diaryModelMock.createDiary.mockRejectedValue(error);

      req.body = {
        user_id: 1,
        content: "Test content",
      };

      await diaryController.createDiary(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Internal server error",
      });
    });
  });

  describe("getDiaryById", () => {
    it("should return a diary if found", async () => {
      const mockDiary = {
        id: 1,
        user_id: 1,
        emotion: "happy", 
        note: "Test diary content", 
        createdAt: new Date(),
        shared: false,
      };
      diaryModelMock.getDiaryById.mockResolvedValue(mockDiary);

      req.params = { id: "1" };

      await diaryController.getDiaryById(req as Request, res as Response);

      expect(diaryModelMock.getDiaryById).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockDiary });
    });

    it("should return 404 if diary is not found", async () => {
      diaryModelMock.getDiaryById.mockResolvedValue(null);

      req.params = { id: "1" };

      await diaryController.getDiaryById(req as Request, res as Response);

      expect(diaryModelMock.getDiaryById).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Diary not found",
      });
    });
  });

  describe("getSharedDiaryByUserId", () => {
    it("should return shared diaries for a user", async () => {
      const mockSharedDiaries = [
        {
          id: 1,
          user_id: 1,
          emotion: "happy", 
          note: "Test diary content", 
          createdAt: new Date(),
          shared: true,
        },
      ];
      diaryModelMock.getSharedDiaryByUserId.mockResolvedValue(mockSharedDiaries);

      req.params = { id: "1" };

      await diaryController.getSharedDiaryByUserId(req as Request, res as Response);

      expect(diaryModelMock.getSharedDiaryByUserId).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockSharedDiaries,
      });
    });

    it("should return 404 if no shared diaries are found for the user", async () => {
      diaryModelMock.getSharedDiaryByUserId.mockResolvedValue([]);

      req.params = { id: "1" };

      await diaryController.getSharedDiaryByUserId(req as Request, res as Response);

      expect(diaryModelMock.getSharedDiaryByUserId).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "No shared diaries found for this user",
      });
    });
  });

  describe("getDiaryByUserId", () => {
    it("should return diaries for a user", async () => {
      const mockDiaries = [
        {
          id: 1,
          user_id: 1,
          emotion: "happy", 
          note: "Test diary content", 
          createdAt: new Date(),
          shared: false,
        },
      ];
      diaryModelMock.getDiaryByUserId.mockResolvedValue(mockDiaries);

      req.params = { id: "1" };

      await diaryController.getDiaryByUserId(req as Request, res as Response);

      expect(diaryModelMock.getDiaryByUserId).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockDiaries,
      });
    });

    it("should return 404 if no diaries are found for the user", async () => {
      diaryModelMock.getDiaryByUserId.mockResolvedValue([]);

      req.params = { id: "1" };

      await diaryController.getDiaryByUserId(req as Request, res as Response);

      expect(diaryModelMock.getDiaryByUserId).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "No diaries found for this user",
      });
    });
  });

  describe("updateDiary", () => {
    it("should update a diary and return the updated data", async () => {
      const mockDiary = {
        id: 1,
        user_id: 1,
        emotion: "happy",   
        note: "Updated diary content",  
        createdAt: new Date(),
        shared: false,
      };
      diaryModelMock.updateDiary.mockResolvedValue(mockDiary);

      req.params = { id: "1" };
      req.body = { content: "Updated diary content" };

      await diaryController.updateDiary(req as Request, res as Response);

      expect(diaryModelMock.updateDiary).toHaveBeenCalledWith(1, req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockDiary });
    });
  });

  describe("deleteDiary", () => {
    it("should delete a diary and return the deleted diary data", async () => {
      const mockDiary = {
        id: 1,
        user_id: 1,
        emotion: "happy",   
        note: "Test diary content",  
        createdAt: new Date(),
        shared: false,
      };
      diaryModelMock.deleteDiary.mockResolvedValue(mockDiary);

      req.params = { id: "1" };

      await diaryController.deleteDiary(req as Request, res as Response);

      expect(diaryModelMock.deleteDiary).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockDiary });
    });
  });
});
