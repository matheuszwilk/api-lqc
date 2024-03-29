import {
    checkIfIdIsValid,
    invalidIdResponse,
    userNotFoundResponse,
    ok,
    serverError,
} from '../helpers/index.js'

export class GetUserAndAvaliationByUserLqcIdController {
    constructor(getUserAndAvaliationByUserLqcIdUseCase) {
        this.getUserAndAvaliationByUserLqcIdUseCase =
            getUserAndAvaliationByUserLqcIdUseCase
    }

    async execute(httpRequest) {
        try {
            const isIdValid = checkIfIdIsValid(httpRequest.params.userId)

            if (!isIdValid) {
                return invalidIdResponse()
            }

            const user =
                await this.getUserAndAvaliationByUserLqcIdUseCase.execute(
                    httpRequest.params.userId,
                )

            if (!user) {
                return userNotFoundResponse()
            }

            return ok(user)
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}
