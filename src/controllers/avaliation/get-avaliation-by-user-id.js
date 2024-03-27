import { UserNotFoundError } from '../../errors/user.js'
import {
    checkIfIdIsValid,
    invalidIdResponse,
    ok,
    serverError,
    userNotFoundResponse,
} from '../helpers/index.js'

export class GetAvaliationByUserIdController {
    constructor(getAvaliationByUserIdUseCase) {
        this.getAvaliationByUserIdUseCase = getAvaliationByUserIdUseCase
    }

    async execute(httpRequest) {
        try {
            const userId = httpRequest.params.userId

            const userIdIsValid = checkIfIdIsValid(userId)

            if (!userIdIsValid) {
                return invalidIdResponse()
            }

            const avaliation =
                await this.getAvaliationByUserIdUseCase.execute(userId)

            if (!avaliation) {
                return userNotFoundResponse()
            }

            return ok(avaliation)
        } catch (error) {
            if (error instanceof UserNotFoundError) {
                return userNotFoundResponse()
            }

            return serverError()
        }
    }
}
