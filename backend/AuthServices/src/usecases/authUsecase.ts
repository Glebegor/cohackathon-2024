import { RegisterRequest } from "../domain/common/requests";
import { IAuthRepository } from "../repositoryes/authRepository";

interface IAuthUsecase {
    repo: IAuthRepository;
    register(input: RegisterRequest): Promise<string>;
}

function newAuthUsecase(repo: IAuthRepository): IAuthUsecase {
    return {
        repo: repo,
        register: async function (input: RegisterRequest): Promise<string> {
            return repo.createUser(input);
        }
    };
}

export { IAuthUsecase, newAuthUsecase };