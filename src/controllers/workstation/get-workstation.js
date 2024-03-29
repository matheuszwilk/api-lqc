import { UserNotFoundError } from '../../errors/user.js'
import {
    checkIfIdIsValid,
    invalidIdResponse,
    ok,
    serverError,
    userNotFoundResponse,
} from '../helpers/index.js'

export class GetWorkstationByUserIdController {
    constructor(getWorkstationByUserIdUseCase) {
        this.getWorkstationByUserIdUseCase = getWorkstationByUserIdUseCase
    }

    async execute(httpRequest) {
        try {
            const userId = httpRequest.query.userId

            const userIdIsValid = checkIfIdIsValid(userId)

            if (!userIdIsValid) {
                return invalidIdResponse()
            }

            const workstation =
                await this.getWorkstationByUserIdUseCase.execute(userId)

            if (!workstation) {
                return userNotFoundResponse()
            }

            return ok(workstation)
        } catch (error) {
            if (error instanceof UserNotFoundError) {
                return userNotFoundResponse()
            }
            console.log(error)
            return serverError()
        }
    }
}
