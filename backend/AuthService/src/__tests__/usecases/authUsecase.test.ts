import { User } from '../../domain/common/user';
import { IAuthUsecase,  newAuthUsecase} from '../../usecases/authUsecase';
import { IAuthRepository } from '../../repositoryes/authRepository';

describe('AuthUsecase', () => {
    let authUsecase: IAuthUsecase;
    let mockRepo: jest.Mocked<IAuthRepository>;

    beforeEach(() => {
        mockRepo = {
            verifyUserByEmailAndPassword: jest.fn(),
            findUserById: jest.fn(),
            approveUserById: jest.fn(),
            prismaClient: {} as any,
        };
        authUsecase = newAuthUsecase(mockRepo);
    });

    it('should login user with correct credentials', async () => {
        const loginRequest = { email: 'test@example.com', password_hash: 'hashedpassword' };
        const user = { id: 1, email: 'test@example.com' } as User;
        mockRepo.verifyUserByEmailAndPassword.mockResolvedValue(user);

        const result = await authUsecase.login(loginRequest);

        expect(mockRepo.verifyUserByEmailAndPassword).toHaveBeenCalledWith(loginRequest.email, loginRequest.password_hash);
        expect(result).toBe(user);
    });

    it('should find user by id', async () => {
        const userId = 1;
        const user = { id: 1, email: 'test@example.com' } as User;
        mockRepo.findUserById.mockResolvedValue(user);

        const result = await authUsecase.findUserById(userId);

        expect(mockRepo.findUserById).toHaveBeenCalledWith(userId);
        expect(result).toBe(user);
    });

    it('should approve user by id', async () => {
        const userId = 1;
        const user = { id: 1, email: 'test@example.com', approved: true } as unknown as User;
        mockRepo.approveUserById.mockResolvedValue(user);

        const result = await authUsecase.approveUserById(userId);

        expect(mockRepo.approveUserById).toHaveBeenCalledWith(userId);
        expect(result).toBe(user);
    });
});
