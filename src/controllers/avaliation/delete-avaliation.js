import { AvaliationNotFoundError } from '../../errors/avaliation.js'
import {
    AvaliationNotFoundResponse,
    checkIfIdIsValid,
    invalidIdResponse,
    ok,
    serverError,
} from '../helpers/index.js'

export class DeleteAvaliationController {
    constructor(deleteAvaliationUseCase) {
        this.deleteAvaliationUseCase = deleteAvaliationUseCase
    }

    async execute(httpRequest) {
        try {
            const idIsValid = checkIfIdIsValid(httpRequest.params.userId)

            if (!idIsValid) {
                return invalidIdResponse()
            }

            const deletedAvaliation =
                await this.deleteAvaliationUseCase.execute(
                    httpRequest.params.userId,
                )

            return ok(deletedAvaliation)
        } catch (error) {
            if (error instanceof AvaliationNotFoundError) {
                return AvaliationNotFoundResponse()
            }

            console.error(error)

            return serverError()
        }
    }
}
