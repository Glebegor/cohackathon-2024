import { Request, Response } from "express";
import { ChildHouseController } from "../../controllers/ChildHouseController";
import { ChildHouseModel } from "../../models/ChildHouseModel";

jest.mock("../../models/ChildHouseModel");

describe("ChildHouseController", () => {
  let childHouseController: ChildHouseController;
  let req: Partial<Request>;
  let res: Partial<Response>;
  let childHouseModelMock: jest.Mocked<ChildHouseModel>;

  beforeEach(() => {
    childHouseController = new ChildHouseController();
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    childHouseModelMock =
      ChildHouseModel.prototype as jest.Mocked<ChildHouseModel>;
  });

  describe("createChildHouse", () => {
    it("should create a child house and return 201 status", async () => {
      const mockChildHouse = {
        id: 1,
        name: "New Child House",
        admin_id: null,
        description: "A wonderful child house",
        address: "123 Child House St.",
        phone: "123-456-789",
        email: "contact@childhouse.com",
      };
      childHouseModelMock.createChildHouse.mockResolvedValue(mockChildHouse);

      req.body = {
        name: "New Child House",
        location: "City Center",
      };

      await childHouseController.createChildHouse(
        req as Request,
        res as Response
      );

      expect(childHouseModelMock.createChildHouse).toHaveBeenCalledWith(
        req.body
      );
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockChildHouse,
      });
    });

    it("should handle errors", async () => {
      const error = new Error("Database error");
      childHouseModelMock.createChildHouse.mockRejectedValue(error);

      req.body = {
        name: "New Child House",
        location: "City Center",
      };

      await childHouseController.createChildHouse(
        req as Request,
        res as Response
      );

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Internal server error",
      });
    });
  });

  describe("getChildHouseById", () => {
    it("should return a child house if found", async () => {
      const mockChildHouse = {
        id: 1,
        name: "New Child House",
        admin_id: null,
        description: "A wonderful child house",
        address: "123 Child House St.",
        phone: "123-456-789",
        email: "contact@childhouse.com",
      };
      childHouseModelMock.getChildHouseById.mockResolvedValue(mockChildHouse);

      req.params = { id: "1" };

      await childHouseController.getChildHouseById(
        req as Request,
        res as Response
      );

      expect(childHouseModelMock.getChildHouseById).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockChildHouse,
      });
    });

    it("should return 404 if child house is not found", async () => {
      childHouseModelMock.getChildHouseById.mockResolvedValue(null);

      req.params = { id: "1" };

      await childHouseController.getChildHouseById(
        req as Request,
        res as Response
      );

      expect(childHouseModelMock.getChildHouseById).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Child house not found",
      });
    });
  });

  describe("getAllChildHouses", () => {
    it("should return all child houses", async () => {
      const mockChildHouses = [
        {
          id: 1,
          name: "Child House 1",
          admin_id: null,
          description: "A place for children",
          address: "123 Main St, City A",
          phone: "123-456-789",
          email: "childhouse1@example.com",
        },
        {
          id: 2,
          name: "Child House 2",
          admin_id: 2,
          description: "A safe space for kids",
          address: "456 Oak Rd, City B",
          phone: "987-654-321",
          email: "childhouse2@example.com",
        },
      ];

      // Adjust the mock method to return the full set of data
      childHouseModelMock.getAllChildHouses.mockResolvedValue(mockChildHouses);

      await childHouseController.getAllChildHouses(
        req as Request,
        res as Response
      );

      expect(childHouseModelMock.getAllChildHouses).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockChildHouses,
      });
    });

    it("should handle errors", async () => {
      const error = new Error("Database error");
      childHouseModelMock.getAllChildHouses.mockRejectedValue(error);

      await childHouseController.getAllChildHouses(
        req as Request,
        res as Response
      );

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "Internal server error",
      });
    });
  });

  describe("updateChildHouse", () => {
    it("should update a child house and return the updated data", async () => {
      const mockChildHouse = {
        id: 1,
        name: "New Child House",
        admin_id: null,
        description: "A wonderful child house",
        address: "123 Child House St.",
        phone: "123-456-789",
        email: "contact@childhouse.com",
      };
      childHouseModelMock.updateChildHouse.mockResolvedValue(mockChildHouse);

      req.params = { id: "1" };
      req.body = { name: "Updated Child House", location: "Updated Location" };

      await childHouseController.updateChildHouse(
        req as Request,
        res as Response
      );

      expect(childHouseModelMock.updateChildHouse).toHaveBeenCalledWith(
        1,
        req.body
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockChildHouse,
      });
    });
  });

  describe("deleteChildHouse", () => {
    it("should delete a child house and return the deleted data", async () => {
      const mockChildHouse = {
        id: 1,
        name: "New Child House",
        admin_id: null,
        description: "A wonderful child house",
        address: "123 Child House St.",
        phone: "123-456-789",
        email: "contact@childhouse.com",
      };
      childHouseModelMock.deleteChildHouse.mockResolvedValue(mockChildHouse);

      req.params = { id: "1" };

      await childHouseController.deleteChildHouse(
        req as Request,
        res as Response
      );

      expect(childHouseModelMock.deleteChildHouse).toHaveBeenCalledWith(1);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        data: mockChildHouse,
      });
    });
  });
});
