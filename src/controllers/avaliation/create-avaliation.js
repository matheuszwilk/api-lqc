import { UserNotFoundError } from '../../errors/user.js'
import { createAvaliationSchema } from '../../schemas/index.js'
import {
    badRequest,
    created,
    serverError,
    userNotFoundResponse,
} from '../helpers/index.js'
import { ZodError } from 'zod'

export class CreateAvaliationController {
    constructor(createAvaliationUseCase) {
        this.createAvaliationUseCase = createAvaliationUseCase
    }

    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            await createAvaliationSchema.parseAsync(params)

            const avaliation =
                await this.createAvaliationUseCase.execute(params)

            return created(avaliation)
        } catch (error) {
            if (error instanceof ZodError) {
                return badRequest({
                    message: error.errors[0].message,
                })
            }

            if (error instanceof UserNotFoundError) {
                return userNotFoundResponse()
            }

            console.error(error)
            return serverError()
        }
    }
}
