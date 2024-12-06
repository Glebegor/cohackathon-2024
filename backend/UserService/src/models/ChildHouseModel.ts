import { PrismaClient, ChildHouse } from "@prisma/client";
import { BaseModel } from "./BaseModel";

export class ChildHouseModel extends BaseModel {
  constructor() {
    super();
  }

  async createChildHouse(data: Omit<ChildHouse, "id">): Promise<ChildHouse> {
    try {
      return await this.prisma.childHouse.create({ data });
    } catch (error) {
      throw new Error(`Error creating child house: ${error.message}`);
    }
  }

  async getChildHouseById(id: number): Promise<ChildHouse | null> {
    try {
      return await this.prisma.childHouse.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error retrieving child house: ${error.message}`);
    }
  }

  async updateChildHouse(
    id: number,
    data: Partial<ChildHouse>
  ): Promise<ChildHouse> {
    try {
      return await this.prisma.childHouse.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Error updating child house: ${error.message}`);
    }
  }

  async deleteChildHouse(id: number): Promise<ChildHouse> {
    try {
      return await this.prisma.childHouse.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error deleting child house: ${error.message}`);
    }
  }
}
