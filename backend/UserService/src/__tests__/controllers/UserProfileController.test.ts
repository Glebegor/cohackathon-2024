import { Request, Response } from "express";
import { UserProfileController } from "../../controllers/UserProfileController";
import { UserProfileModel } from "../../models/UserProfileModel";

jest.mock("../../models/UserProfileModel");

describe("UserProfileController", () => {
  let userProfileController: UserProfileController;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let userProfileModelMock: jest.Mocked<UserProfileModel>;

  beforeEach(() => {
    userProfileController = new UserProfileController();
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    userProfileModelMock = UserProfileModel.prototype as jest.Mocked<UserProfileModel>;
  });

  describe("createUserProfile", () => {
    it("should create a user profile and return 201 status", async () => {
      const mockProfile = {
        id: 1,
        user_id: 1,
        description: "Test description",
        interests: "Test interests",
        note: "Test note",
        profile_picture: "profile_picture.jpg",
        back_story: "Test back story",
      };
      userProfileModelMock.createUserProfile.mockResolvedValue(mockProfile);

      req.body = {
        user_id: 1,
        description: "Test description",
        interests: "Test interests",
        note: "Test note",
        profile_picture: "profile_picture.jpg",
        back_story: "Test back story",
      };

      await userProfileController.createUserProfile(req as Request, res as Response);

      expect(userProfileModelMock.createUserProfile).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockProfile });
    });

    it("should handle errors", async () => {
      const error = new Error("Database error");
      userProfileModelMock.createUserProfile.mockRejectedValue(error);

      req.body = {
        user_id: 1,
        description: "Test description",
        interests: "Test interests",
        note: "Test note",
        profile_picture: "profile_picture.jpg",
        back_story: "Test back story",
      };

      await userProfileController.createUserProfile(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: error.message,
      });
    });
  });

  describe("getUserProfileById", () => {
    it("should return a user profile if found", async () => {
      const mockProfile = {
        id: 1,
        user_id: 1,
        description: "Test description",
        interests: "Test interests",
        note: "Test note",
        profile_picture: "profile_picture.jpg",
        back_story: "Test back story",
      };
      userProfileModelMock.getUserProfileById.mockResolvedValue(mockProfile);

      req.params = { id: "1" };

      await userProfileController.getUserProfileById(req as Request, res as Response);

      expect(userProfileModelMock.getUserProfileById).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockProfile });
    });

    it("should return 404 if profile is not found", async () => {
      userProfileModelMock.getUserProfileById.mockResolvedValue(null);

      req.params = { id: "1" };

      await userProfileController.getUserProfileById(req as Request, res as Response);

      expect(userProfileModelMock.getUserProfileById).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Profile not found",
      });
    });
  });

  describe("updateUserProfile", () => {
    it("should update a user profile and return the updated data", async () => {
      const mockProfile = {
        id: 1,
        user_id: 1,
        description: "Updated description",
        interests: "Updated interests",
        note: "Updated note",
        profile_picture: "updated_picture.jpg",
        back_story: "Updated back story",
      };
      userProfileModelMock.updateUserProfile.mockResolvedValue(mockProfile);

      req.params = { id: "1" };
      req.body = { description: "Updated description" };

      await userProfileController.updateUserProfile(req as Request, res as Response);

      expect(userProfileModelMock.updateUserProfile).toHaveBeenCalledWith(1, req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockProfile });
    });
  });

  describe("deleteUserProfile", () => {
    it("should delete a user profile and return the deleted profile data", async () => {
      const mockProfile = {
        id: 1,
        user_id: 1,
        description: "Test description",
        interests: "Test interests",
        note: "Test note",
        profile_picture: "profile_picture.jpg",
        back_story: "Test back story",
      };
      userProfileModelMock.deleteUserProfile.mockResolvedValue(mockProfile);

      req.params = { id: "1" };

      await userProfileController.deleteUserProfile(req as Request, res as Response);

      expect(userProfileModelMock.deleteUserProfile).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockProfile });
    });
  });
});
