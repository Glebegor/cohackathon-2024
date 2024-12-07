import { PrismaClient, Diary } from "@prisma/client";
import { BaseModel } from "./BaseModel";

export class DiaryModel extends BaseModel {
  constructor() {
    super();
  }

  async createDiary(data: Omit<Diary, "id">): Promise<Diary> {
    try {
      return await this.prisma.diary.create({ data });
    } catch (error) {
      throw new Error(`Error creating child house: ${error.message}`);
    }
  }

  async getDiaryById(id: number): Promise<Diary | null> {
    try {
      return await this.prisma.diary.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error retrieving child house: ${error.message}`);
    }
  }

  async updateDiary(
    id: number,
    data: Partial<Diary>
  ): Promise<Diary> {
    try {
      return await this.prisma.diary.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Error updating child house: ${error.message}`);
    }
  }

  async deleteDiary(id: number): Promise<Diary> {
    try {
      return await this.prisma.diary.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error deleting child house: ${error.message}`);
    }
  }
}
