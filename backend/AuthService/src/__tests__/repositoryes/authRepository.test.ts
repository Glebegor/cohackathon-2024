import { PrismaClient } from "@prisma/client";
import { IAuthRepository, newAuthRepository } from "../../repositoryes/authRepository";

jest.mock('@prisma/client', () => {
    const actualPrisma = jest.requireActual('@prisma/client');
    return {
        ...actualPrisma,
        PrismaClient: jest.fn().mockImplementation(() => ({
            user: {
                findFirst: jest.fn(),
                update: jest.fn()
            }
        }))
    };
});

const prismaMock = new PrismaClient();

describe('authRepository', () => {
    let repo: IAuthRepository;

    beforeAll(() => {
        repo = newAuthRepository(prismaMock);
    });

    it('should return a authRepository object', () => {
        expect(repo).toBeDefined();
    });

    it('should verify user by email and password', async () => {
        const email = 'test@example.com';
        const password_hash = 'hashedpassword';
        (prismaMock.user.findFirst as jest.Mock).mockResolvedValue({ id: 1, email, password_hash });

        const user = await repo.verifyUserByEmailAndPassword(email, password_hash);

        expect(prismaMock.user.findFirst).toHaveBeenCalledWith({
            where: { email, password_hash }
        });
        expect(user).toEqual({ id: 1, email, password_hash });
    });

    it('should find user by id', async () => {
        const id = 1;
        (prismaMock.user.findFirst as jest.Mock).mockResolvedValue({ id, email: 'test@example.com' });

        const user = await repo.findUserById(id);

        expect(prismaMock.user.findFirst).toHaveBeenCalledWith({
            where: { id }
        });
        expect(user).toEqual({ id, email: 'test@example.com' });
    });

    it('should approve user by id', async () => {
        const id = 1;
        (prismaMock.user.update as jest.Mock).mockResolvedValue({ id, activated: true });

        const user = await repo.approveUserById(id);

        expect(prismaMock.user.update).toHaveBeenCalledWith({
            where: { id },
            data: { activated: true }
        });
        expect(user).toEqual({ id, activated: true });
    });
});
