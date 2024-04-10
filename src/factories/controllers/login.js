import { PasswordHasherAdapter } from '../../adapters/index.js'
import { LoginController } from '../../controllers/index.js'
import { PostgresGetUserByEmailRepository } from '../../repositories/postgres/index.js'
import { LoginUseCase } from '../../use-cases/index.js'

export const makeLoginController = () => {
    const getUserByEmailRepository = new PostgresGetUserByEmailRepository()

    const passwordHasherAdapter = new PasswordHasherAdapter()

    const loginUseCase = new LoginUseCase()

    const loginController = new LoginController(
        getUserByEmailRepository,
        passwordHasherAdapter,
        loginUseCase,
    )

    return loginController
}
