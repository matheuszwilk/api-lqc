import { UserNotFoundError } from '../../errors/user.js'
import {
    checkIfIdIsValid,
    invalidIdResponse,
    userNotFoundResponse,
    ok,
    serverError,
} from '../helpers/index.js'

export class GetUserAndWorkStationByUserLqcIdController {
    constructor(getUserAndWorkStationByUserLqcIdUseCase) {
        this.getUserAndWorkStationByUserLqcIdUseCase =
            getUserAndWorkStationByUserLqcIdUseCase
    }

    async execute(httpRequest) {
        try {
            const isIdValid = checkIfIdIsValid(httpRequest.params.userId)

            if (!isIdValid) {
                return invalidIdResponse()
            }

            const user =
                await this.getUserAndWorkStationByUserLqcIdUseCase.execute(
                    httpRequest.params.userId,
                )

            if (!user) {
                return userNotFoundResponse()
            }

            return ok(user)
        } catch (error) {
            if (error instanceof UserNotFoundError) {
                return userNotFoundResponse()
            }
            console.error(error)
            return serverError()
        }
    }
}
