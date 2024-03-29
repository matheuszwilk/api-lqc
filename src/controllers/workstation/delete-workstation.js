import { WorkstationNotFoundError } from '../../errors/workstation.js'
import {
    WorkstationNotFoundResponse,
    checkIfIdIsValid,
    invalidIdResponse,
    ok,
    serverError,
} from '../helpers/index.js'

export class DeleteWorkstationController {
    constructor(deleteWorkstationUseCase) {
        this.deleteWorkstationUseCase = deleteWorkstationUseCase
    }

    async execute(httpRequest) {
        try {
            const userId = httpRequest.params.userId

            const idIsValid = checkIfIdIsValid(userId)

            if (!idIsValid) {
                return invalidIdResponse()
            }

            const deletedWorkstation =
                await this.deleteWorkstationUseCase.execute(userId)

            return ok(deletedWorkstation)
        } catch (error) {
            if (error instanceof WorkstationNotFoundError) {
                return WorkstationNotFoundResponse()
            }

            console.error(error)
            return serverError()
        }
    }
}
