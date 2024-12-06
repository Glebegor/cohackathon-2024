import { Router } from "express";
import { ChildHouseController } from "../controllers/ChildHouseController";

const router = Router();
const childHouseController = new ChildHouseController();

router.post("/", childHouseController.createChildHouse.bind(childHouseController));
router.get("/:id", childHouseController.getChildHouseById.bind(childHouseController));
router.put("/:id", childHouseController.updateChildHouse.bind(childHouseController));
router.delete("/:id", childHouseController.deleteChildHouse.bind(childHouseController));

export default router;
