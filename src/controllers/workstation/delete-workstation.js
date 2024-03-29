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
            const workstationId = httpRequest.params.workstationId

            const idIsValid = checkIfIdIsValid(workstationId)

            if (!idIsValid) {
                return invalidIdResponse()
            }

            const deletedWorkstation =
                await this.deleteWorkstationUseCase.execute(workstationId)

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
