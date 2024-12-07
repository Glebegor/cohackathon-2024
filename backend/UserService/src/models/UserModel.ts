import { PrismaClient, User } from "@prisma/client";
import { BaseModel } from "./BaseModel";

export class UserModel extends BaseModel {
  constructor() {
    super();
  }

  async createUser(data: Omit<User, "id">): Promise<User> {
    try {
      return await this.prisma.user.create({ data });
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async getUserById(id: number): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    }
  }

  async getChildHouseUsers(childHouseId: number): Promise<User[]> {
    try {
      return await this.prisma.user.findMany({
        where: { childhouse_id: childHouseId },
      });
    } catch (error) {
      throw new Error(`Error retrieving users for child house: ${error.message}`);
    }
  }

  async updateUser(id: number, data: Partial<User>): Promise<User> {
    try {
      return await this.prisma.user.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  async deleteUser(id: number): Promise<User> {
    try {
      return await this.prisma.user.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}
