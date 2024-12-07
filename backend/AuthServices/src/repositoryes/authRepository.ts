import { PrismaClient } from "@prisma/client";
import { User } from "../domain/common/user";
import { RegisterRequest } from "../domain/common/requests";

interface IAuthRepository {
    prismaClient: PrismaClient;
    createUser(input: RegisterRequest): Promise<string>;
}

function newAuthRepository(prismaClient: PrismaClient): IAuthRepository {
    return {
        prismaClient,
        createUser: async function (input: RegisterRequest): Promise<string> {
            try {

                await prismaClient.user.create({
                    data: {
                        email: input.email,
                        password_hash: input.password_hash,
                        name: input.name,
                        surname: input.surname,
                        activated: false,
                        last_login: new Date(),
                        childhouse_id: input.childhouse_id,
                        role_id: 0,
                    }
                });
                // get use id
                var user = await prismaClient.user.findUnique({
                    where: {
                        email: input.email,
                    }
                });
                if (user == null) {
                    return "Error while creating user.";
                }
                await prismaClient.userProfile.create({
                    data: {
                        user_id: user.id,
                        description: "",
                        interests: "",
                        note: "",
                        profile_picture: "",
                        back_story: "",
                    }
                });

                return '';
            } catch (error: any) {
                return error;
        }
    }
}
}

export { IAuthRepository, newAuthRepository };