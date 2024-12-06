import { PrismaClient } from "@prisma/client";

export abstract class BaseModel {
  protected prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  protected async disconnect(): Promise<void> {
    await this.prisma.$disconnect();
  }
}
