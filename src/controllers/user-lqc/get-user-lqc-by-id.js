import {
    checkIfIdIsValid,
    invalidIdResponse,
    ok,
    serverError,
    userNotFoundResponse,
} from '../helpers/index.js'

export class GetUserLqcByIdController {
    constructor({ getUserLqcByIdUseCase }) {
        this.getUserLqcByIdUseCase = getUserLqcByIdUseCase
    }
    async execute(httpRequest) {
        try {
            const isIdValid = checkIfIdIsValid(httpRequest.params.userId)

            if (!isIdValid) {
                return invalidIdResponse()
            }

            const userLqc = await this.getUserLqcByIdUseCase.execute(
                httpRequest.params.userId,
            )

            if (!userLqc) {
                return userNotFoundResponse()
            }

            return ok(userLqc)
        } catch (error) {
            console.error(error)
            return serverError()
        }
    }
}
