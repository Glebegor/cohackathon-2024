// import request from "supertest";
// import { UserController } from "../controllers/UserController";
// import { UserModel } from "../models/UserModel";

// // Mockování UserModel
// jest.mock("../models/UserModel");

// describe("UserController", () => {
//   let userController: UserController;
//   let userModel: jest.Mocked<UserModel>;

//   beforeEach(() => {
//     userModel = new UserModel() as jest.Mocked<UserModel>;
//     userController = new UserController();
//   });

//   describe("POST /users", () => {
//     it("should create a new user", async () => {
//       const newUser = { id: 1, name: "John Doe", email: "john@example.com" };

//       // Mockování metody createUser
//       userModel.createUser.mockResolvedValue(newUser);

//       const response = await request(app)
//         .post("/users")
//         .send({ name: "John Doe", email: "john@example.com" });

//       expect(response.status).toBe(201);
//       expect(response.body.success).toBe(true);
//       expect(response.body.data).toEqual(newUser);
//     });

//     it("should handle error if user creation fails", async () => {
//       const errorMessage = "Error creating user";
      
//       // Mockování chyby při vytváření uživatele
//       userModel.createUser.mockRejectedValue(new Error(errorMessage));

//       const response = await request(app)
//         .post("/users")
//         .send({ name: "John Doe", email: "john@example.com" });

//       expect(response.status).toBe(500);
//       expect(response.body.success).toBe(false);
//       expect(response.body.message).toBe(errorMessage);
//     });
//   });

//   describe("GET /users/:id", () => {
//     it("should get a user by id", async () => {
//       const user = { id: 1, name: "John Doe", email: "john@example.com" };

//       // Mockování metody getUserById
//       userModel.getUserById.mockResolvedValue(user);

//       const response = await request(app)
//         .get("/users/1");

//       expect(response.status).toBe(200);
//       expect(response.body.success).toBe(true);
//       expect(response.body.data).toEqual(user);
//     });

//     it("should return 404 if user not found", async () => {
//       // Mockování, že uživatel není nalezen
//       userModel.getUserById.mockResolvedValue(null);

//       const response = await request(app)
//         .get("/users/999");

//       expect(response.status).toBe(404);
//       expect(response.body.success).toBe(false);
//       expect(response.body.message).toBe("User not found");
//     });
//   });

//   describe("PUT /users/:id", () => {
//     it("should update a user", async () => {
//       const updatedUser = { id: 1, name: "John Doe", email: "john@example.com" };

//       // Mockování metody updateUser
//       userModel.updateUser.mockResolvedValue(updatedUser);

//       const response = await request(app)
//         .put("/users/1")
//         .send({ name: "John Doe", email: "john@example.com" });

//       expect(response.status).toBe(200);
//       expect(response.body.success).toBe(true);
//       expect(response.body.data).toEqual(updatedUser);
//     });
//   });

//   describe("DELETE /users/:id", () => {
//     it("should delete a user", async () => {
//       const deletedUser = { id: 1, name: "John Doe", email: "john@example.com" };

//       // Mockování metody deleteUser
//       userModel.deleteUser.mockResolvedValue(deletedUser);

//       const response = await request(app)
//         .delete("/users/1");

//       expect(response.status).toBe(200);
//       expect(response.body.success).toBe(true);
//       expect(response.body.data).toEqual(deletedUser);
//     });
//   });
// });
