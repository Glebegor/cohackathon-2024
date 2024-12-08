import { PrismaClient, ChildHouse } from "@prisma/client";
import { BaseModel } from "./BaseModel";

export class ChildHouseModel extends BaseModel {
  public conRedCli: any;

  constructor(connectedRedisClient: any) {
    super();
    this.conRedCli = connectedRedisClient;

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
      var childHouse = await this.conRedCli.get(id);
      if (childHouse) {
        return JSON.parse(childHouse);
      } else {
        childHouse = await this.prisma.childHouse.findUnique({ where: { id } });
        await this.conRedCli.set(id, JSON.stringify(childHouse));
      }
      return await this.prisma.childHouse.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error retrieving child house: ${error.message}`);
    }
  }

  async getAllChildHouses(): Promise<ChildHouse[]> {
    try {
      return await this.prisma.childHouse.findMany();
    } catch (error) {
      throw new Error(`Error retrieving all child houses: ${error.message}`);
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
