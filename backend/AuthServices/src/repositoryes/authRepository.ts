import { PrismaClient } from "@prisma/client";
import { RegisterRequest } from "../domain/common/requests";

interface IAuthRepository {
    prismaClient: PrismaClient;
    verifyUserByEmailAndPassword(email: string, password_hash: string): Promise<any>;
    findUserById(id: number): Promise<any>;
    approveUserById(id: number): Promise<any>;
}

function newAuthRepository(prismaClient: PrismaClient): IAuthRepository {
    return {
        prismaClient,
        verifyUserByEmailAndPassword: async (email: string, password_hash: string) => {
            return prismaClient.user.findFirst({
                where: {
                    email: email,
                    password_hash: password_hash
                }
            });
        },
        findUserById: async (id: number) => {
            return prismaClient.user.findFirst({
                where: {
                    id: id
                }
            });
        },
        approveUserById: async (id: number) => {
            return prismaClient.user.update({
                where: {
                    id: id
                },
                data: {
                    activated: true
                }
            });
        }
    }
}

export { IAuthRepository, newAuthRepository };