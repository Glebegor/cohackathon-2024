import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authenticate } from "../middlewares/authenticationMiddleware";

const router = Router();
const userController = new UserController();

router.post("/", userController.createUser.bind(userController));
router.get("/:id", userController.getUserById.bind(userController));
router.get("/get-childHouse-users", userController.getChildHouseUsers.bind(userController));
router.put("/:id", userController.updateUser.bind(userController));
router.delete("/:id", userController.deleteUser.bind(userController));

export {router};
