import { RegistrationAlreadyInUseError } from '../../errors/user.js'
import { creeateUserLQCSchema } from '../../schemas/userLQC.js'
import { badRequest, created, serverError } from '../helpers/index.js'
import { ZodError } from 'zod'

export class CreateUserLqcController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase
    }

    async execute(httpRequest) {
        try {
            const params = httpRequest.body

            await creeateUserLQCSchema.parseAsync(params)

            const createdUserLqc = await this.createUserUseCase.execute(params)

            return created(createdUserLqc)
        } catch (error) {
            if (error instanceof ZodError) {
                return badRequest({
                    message: error.errors[0].message,
                })
            }

            if (error instanceof RegistrationAlreadyInUseError) {
                return badRequest({ message: error.message })
            }

            console.error(error)
            return serverError()
        }
    }
}
