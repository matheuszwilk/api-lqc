import { UserNotFoundError } from '../../errors/user.js'
import { ok, serverError } from '../helpers/index.js'

export class LoginController {
    constructor(getUserByEmailRepository, passwordHasherAdapter, loginUseCase) {
        this.getUserByEmailRepository = getUserByEmailRepository
        this.passwordHasherAdapter = passwordHasherAdapter
        this.loginUseCase = loginUseCase
    }

    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            const user = await this.getUserByEmailRepository.execute(
                params.email,
            )

            if (!user.email) {
                throw new UserNotFoundError(params.email)
            }

            const passwordIsvalid = await this.passwordHasherAdapter.compare(
                params.password,
                user.password,
            )

            if (!passwordIsvalid) {
                throw new Error('Shiiiit')
            }

            const token = await this.loginUseCase.execute(params)

            return ok(token)
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}
