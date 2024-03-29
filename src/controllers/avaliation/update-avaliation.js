import { ZodError } from 'zod'
import { updateAvaliationSchema } from '../../schemas/index.js'
import {
    checkIfIdIsValid,
    invalidIdResponse,
    serverError,
    ok,
    badRequest,
    AvaliationNotFoundResponse,
} from '../helpers/index.js'
import { AvaliationNotFoundError } from '../../errors/avaliation.js'

export class UpdateAvaliationController {
    constructor(updateAvaliationUseCase) {
        this.updateAvaliationUseCase = updateAvaliationUseCase
    }
    async execute(httpRequest) {
        try {
            const idIsValid = checkIfIdIsValid(httpRequest.params.userId)

            if (!idIsValid) {
                return invalidIdResponse()
            }

            const updateAvaliationParams = httpRequest.body

            await updateAvaliationSchema.parseAsync(updateAvaliationParams)

            const avaliation = await this.updateAvaliationUseCase.execute(
                httpRequest.params.userId,
                updateAvaliationParams,
            )

            return ok(avaliation)
        } catch (error) {
            if (error instanceof ZodError) {
                return badRequest({
                    message: error.errors[0].message,
                })
            }

            if (error instanceof AvaliationNotFoundError) {
                return AvaliationNotFoundResponse()
            }

            console.error(error)

            return serverError()
        }
    }
}
