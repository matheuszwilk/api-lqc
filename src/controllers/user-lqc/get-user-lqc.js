import { ok, serverError } from '../helpers/index.js'

export class GetAllUsersController {
    constructor(getAllUserLqcUseCase) {
        this.getAllUserLqcUseCase = getAllUserLqcUseCase
    }
    async execute(httpRequest) {
        try {
            const users = await this.getAllUserLqcUseCase.execute(
                httpRequest.params,
            )

            return ok(users)
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}
