import { UserNotFoundError } from '../../errors/user.js'
import { createWorkstationSchema } from '../../schemas/index.js'
import {
    badRequest,
    created,
    serverError,
    userNotFoundResponse,
} from '../helpers/index.js'
import { ZodError } from 'zod'

export class CreateWorkstationController {
    constructor(createWorkstationUseCase) {
        this.createWorkstationUseCase = createWorkstationUseCase
    }

    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            await createWorkstationSchema.parseAsync(params)

            const workstation =
                await this.createWorkstationUseCase.execute(params)

            return created(workstation)
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
