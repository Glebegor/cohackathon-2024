import { LoginRequest, RegisterRequest } from "../domain/common/requests";
import { IAuthRepository } from "../repositoryes/authRepository";

interface IAuthUsecase {
    repo: IAuthRepository;
    login(input: LoginRequest): Promise<any>;
    findUserById(id: number): Promise<any>;
    approveUserById(id: number): Promise<any>;
}

function newAuthUsecase(repo: IAuthRepository): IAuthUsecase {
    return {
        repo: repo,
        login: async (input: LoginRequest) => {
            return repo.verifyUserByEmailAndPassword(input.email, input.password_hash);
        },
        findUserById: async (id: number) => {
            return repo.findUserById(id);
        },
        approveUserById: async (id: number) => {
            return repo.approveUserById(id);
        }
    };
}

export { IAuthUsecase, newAuthUsecase };