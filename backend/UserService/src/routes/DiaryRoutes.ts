import { Router } from "express";
import { DiaryController } from "../controllers/DiaryController";
import { authenticate } from '../middlewares/authenticationMiddleware';

const router = Router();
const diaryController = new DiaryController();

router.post("/", diaryController.createDiary.bind(diaryController));
router.get("/:id", diaryController.getDiaryById.bind(diaryController));
router.get("/get-sharedDiary-by-userId/:id", diaryController.getSharedDiaryByUserId.bind(diaryController));
router.get("/get-diary-by-userId/:id", diaryController.getDiaryByUserId.bind(diaryController));
router.put("/:id", diaryController.updateDiary.bind(diaryController));
router.delete("/:id", diaryController.deleteDiary.bind(diaryController));

export {router};
