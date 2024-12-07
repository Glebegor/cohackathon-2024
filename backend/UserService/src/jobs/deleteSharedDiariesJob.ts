import { DiaryModel } from "../models/DiaryModel";

const diaryModel = new DiaryModel();

export const deleteSharedDiariesJob = async () => {
  try {
    console.log("Cron job started: Deleting shared diaries...");

    const deletedDiaries = await diaryModel.deleteSharedDiaries();

    if (deletedDiaries.length > 0) {
      console.log(`Deleted ${deletedDiaries.length} shared diaries.`);
    } else {
      console.log("No shared diaries found to delete.");
    }
  } catch (error) {
    console.error(`Error during cron job execution: ${error.message}`);
  }
};
