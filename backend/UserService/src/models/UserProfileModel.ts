import { PrismaClient, UserProfile } from "@prisma/client";
import { BaseModel } from "./BaseModel";

export class UserProfileModel extends BaseModel {
  public conRedCli: any;

  constructor(connectedRedisClient: any) {
    super();
    this.conRedCli = connectedRedisClient;
  }

  async createUserProfile(data: Omit<UserProfile, "id">): Promise<UserProfile> {
    try {
      return await this.prisma.userProfile.create({ data });
    } catch (error) {
      throw new Error(`Error creating user profile: ${error.message}`);
    }
  }

  async getUserProfileById(id: number): Promise<UserProfile | null> {
    try {
      var userProfile = await this.conRedCli.get(id);
      if (userProfile) {
        return JSON.parse(userProfile);
      } else {
        userProfile = await this.prisma.userProfile.findUnique({ where: { id } });
        await this.conRedCli.set(id, JSON.stringify(userProfile));
      }
      return await this.prisma.userProfile.findUnique({ where: { id } });
    } catch (error) {
      throw new Error(`Error retrieving user profile: ${error.message}`);
    }
  }

  async updateUserProfile(
    id: number,
    data: Partial<UserProfile>
  ): Promise<UserProfile> {
    try {
      return await this.prisma.userProfile.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Error updating user profile: ${error.message}`);
    }
  }

  async deleteUserProfile(id: number): Promise<UserProfile> {
    try {
      return await this.prisma.userProfile.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Error deleting user profile: ${error.message}`);
    }
  }
}
