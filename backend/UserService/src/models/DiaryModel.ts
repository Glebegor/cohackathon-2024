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

  async getSharedDiaryByUserId(userId: number): Promise<Diary[]> {
    try {
      return await this.prisma.diary.findMany({
        where: { user_id: userId, shared: true },
      });
    } catch (error) {
      throw new Error(
        `Error retrieving shared diaries for user: ${error.message}`
      );
    }
  }

  // Získání všech poznámek uživatele
  async getDiaryByUserId(userId: number): Promise<Diary[]> {
    try {
      return await this.prisma.diary.findMany({
        where: { user_id: userId },
      });
    } catch (error) {
      throw new Error(`Error retrieving diaries for user: ${error.message}`);
    }
  }

  async updateDiary(id: number, data: Partial<Diary>): Promise<Diary> {
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

  async deleteSharedDiaries(): Promise<Diary[]> {
    try {
      const sharedDiaries = await this.prisma.diary.findMany({
        where: { shared: true },
      });

      await this.prisma.diary.deleteMany({
        where: {
          shared: true,
        },
      });

      return sharedDiaries;
    } catch (error) {
      throw new Error(`Error deleting shared diaries: ${error.message}`);
    }
  }
}