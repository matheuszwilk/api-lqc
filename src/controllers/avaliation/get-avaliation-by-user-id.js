import { UserNotFoundError } from '../../errors/user.js'
import {
    checkIfIdIsValid,
    invalidIdResponse,
    ok,
    requiredFieldIsMissingResponse,
    serverError,
    userNotFoundResponse,
} from '../helpers/index.js'

export class GetAvaliationByUserIdController {
    constructor(getAvaliationByUserIdUseCase) {
        this.getAvaliationByUserIdUseCase = getAvaliationByUserIdUseCase
    }

    async execute(httpRequest) {
        try {
            const userLqcId = httpRequest.query.userLqcId

            if (!userLqcId) {
                return requiredFieldIsMissingResponse('userLqcId')
            }

            const userIdIsValid = checkIfIdIsValid(userLqcId)

            if (!userIdIsValid) {
                return invalidIdResponse()
            }

            const avaliation =
                await this.getAvaliationByUserIdUseCase.execute(userLqcId)

            return ok(avaliation)
        } catch (error) {
            console.error(error)

            if (error instanceof UserNotFoundError) {
                return userNotFoundResponse()
            }

            return serverError()
        }
    }
}
