import { ZodError } from 'zod'
import { updateWorkstationSchema } from '../../schemas/index.js'
import {
    checkIfIdIsValid,
    invalidIdResponse,
    serverError,
    ok,
    badRequest,
    WorkstationNotFoundResponse,
} from '../helpers/index.js'
import { WorkstationNotFoundError } from '../../errors/workstation.js'

export class UpdateWorkStationController {
    constructor(updateWorkStationUseCase) {
        this.updateWorkStationUseCase = updateWorkStationUseCase
    }
    async execute(httpRequest) {
        try {
            const idIsValid = checkIfIdIsValid(httpRequest.params.workstationId)

            if (!idIsValid) {
                return invalidIdResponse()
            }

            const updateWorkStationParams = httpRequest.body

            await updateWorkstationSchema.parseAsync(updateWorkStationParams)

            const workstation = await this.updateWorkStationUseCase.execute(
                httpRequest.params.workstationId,
                updateWorkStationParams,
            )

            return ok(workstation)
        } catch (error) {
            if (error instanceof ZodError) {
                return badRequest({
                    message: error.errors[0].message,
                })
            }

            if (error instanceof WorkstationNotFoundError) {
                return WorkstationNotFoundResponse()
            }

            console.error(error)
            return serverError()
        }
    }
}
