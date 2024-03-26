import {
    RegistrationAlreadyInUseError,
    UserNotFoundError,
} from '../../errors/user.js'
import { updateUserLQCSchema } from '../../schemas/userLQC.js'
import {
    checkIfIdIsValid,
    invalidIdResponse,
    badRequest,
    ok,
    serverError,
    userNotFoundResponse,
} from '../helpers/index.js'
import { ZodError } from 'zod'

export class UpdateUserLqcController {
    constructor(updateUserLqcUseCase) {
        this.updateUserLqcUseCase = updateUserLqcUseCase
    }

    async execute(httpRequest) {
        try {
            const userLqcId = httpRequest.params.userId

            const isIdValid = checkIfIdIsValid(userLqcId)

            if (!isIdValid) {
                return invalidIdResponse()
            }

            const params = httpRequest.body

            await updateUserLQCSchema.parseAsync(params)

            const updatedUserLqc = await this.updateUserLqcUseCase.execute(
                userLqcId,
                params,
            )

            return ok(updatedUserLqc)
        } catch (error) {
            if (error instanceof ZodError) {
                return badRequest({
                    message: error.errors[0].message,
                })
            }

            if (error instanceof RegistrationAlreadyInUseError) {
                return badRequest({ message: error.message })
            }

            if (error instanceof UserNotFoundError) {
                return userNotFoundResponse()
            }

            console.error(error)
            return serverError()
        }
    }
}
