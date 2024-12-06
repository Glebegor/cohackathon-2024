import { Router } from "express";
import { UserProfileController } from "../controllers/UserProfileController";

const router = Router();
const userProfileController = new UserProfileController();

router.post("/", userProfileController.createUserProfile.bind(userProfileController));
router.get("/:id", userProfileController.getUserProfileById.bind(userProfileController));
router.put("/:id", userProfileController.updateUserProfile.bind(userProfileController));
router.delete("/:id", userProfileController.deleteUserProfile.bind(userProfileController));

export default router;
