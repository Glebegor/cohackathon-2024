import { Request, Response } from "express";
import { UserController } from "../../controllers/UserController";
import { UserModel } from "../../models/UserModel";

jest.mock("../../models/UserModel");

describe("UserController", () => {
  let userController: UserController;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let userModelMock: jest.Mocked<UserModel>;

  beforeEach(() => {
    userController = new UserController();
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    userModelMock = UserModel.prototype as jest.Mocked<UserModel>;
  });

  describe("createUser", () => {
    it("should create a user and return 201 status", async () => {
      const mockUser = {
        id: 1,
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        password_hash: "hashedPassword",
        last_login: null,
        activated: false,
        role_id: 1,
        childhouse_id: 2,
      };
      userModelMock.createUser.mockResolvedValue(mockUser);

      req.body = {
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        password_hash: "hashedPassword",
        role_id: 1,
        childhouse_id: 2,
      };

      await userController.createUser(req as Request, res as Response);

      expect(userModelMock.createUser).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockUser });
    });

    it("should handle errors", async () => {
      const error = new Error("Database error");
      userModelMock.createUser.mockRejectedValue(error);

      req.body = {
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        password_hash: "hashedPassword",
        role_id: 1,
        childhouse_id: 2,
      };

      await userController.createUser(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: error.message,
      });
    });
  });

  describe("getUserById", () => {
    it("should return a user if found", async () => {
      const mockUser = {
        id: 1,
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        password_hash: "hashedPassword",
        last_login: null,
        activated: false,
        role_id: 1,
        childhouse_id: 2,
      };
      userModelMock.getUserById.mockResolvedValue(mockUser);

      req.params = { id: "1" };

      await userController.getUserById(req as Request, res as Response);

      expect(userModelMock.getUserById).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockUser });
    });

    it("should return 404 if user is not found", async () => {
      userModelMock.getUserById.mockResolvedValue(null);

      req.params = { id: "1" };

      await userController.getUserById(req as Request, res as Response);

      expect(userModelMock.getUserById).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "User not found",
      });
    });
  });

  describe("getChildHouseUsers", () => {
    it("should return users belonging to a child house", async () => {
      const mockUsers = [
        {
          id: 1,
          name: "John",
          surname: "Doe",
          email: "john.doe@example.com",
          password_hash: "hashedPassword",
          last_login: null,
          activated: false,
          role_id: 1,
          childhouse_id: 2,
        },
      ];
      userModelMock.getChildHouseUsers.mockResolvedValue(mockUsers);

      req.params = { childHouseId: "2" };

      await userController.getChildHouseUsers(req as Request, res as Response);

      expect(userModelMock.getChildHouseUsers).toHaveBeenCalledWith(2);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockUsers });
    });
  });

  describe("updateUser", () => {
    it("should update a user and return the updated data", async () => {
      const mockUser = {
        id: 1,
        name: "John",
        surname: "Doe",
        email: "john.doe@example.com",
        password_hash: "hashedPassword",
        last_login: null,
        activated: false,
        role_id: 1,
        childhouse_id: 2,
      };
      userModelMock.updateUser.mockResolvedValue(mockUser);

      req.params = { id: "1" };
      req.body = { name: "John Updated" };

      await userController.updateUser(req as Request, res as Response);

      expect(userModelMock.updateUser).toHaveBeenCalledWith(1, req.body);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ success: true, data: mockUser });
    });
  });
});
