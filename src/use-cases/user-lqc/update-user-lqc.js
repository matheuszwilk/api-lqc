import { RegistrationAlreadyInUseError } from '../../errors/user.js'

export class UpdateUserLqcUseCase {
    constructor(getUserByRegistrationRepository, updateUserLqcRepository) {
        this.getUserByRegistrationRepository = getUserByRegistrationRepository
        this.updateUserLqcRepository = updateUserLqcRepository
    }

    async execute(userId, updateUserLqcParams) {
        if (updateUserLqcParams.registration) {
            const userWithProvidedRegistration =
                await this.getUserByRegistrationRepository.execute(
                    updateUserLqcParams.registration,
                )

            if (
                userWithProvidedRegistration &&
                userWithProvidedRegistration.registration !== userId
            ) {
                throw new RegistrationAlreadyInUseError(
                    updateUserLqcParams.registration,
                )
            }
        }

        const user = { ...updateUserLqcParams }

        const updatedUserLqc = await this.updateUserLqcRepository.execute(
            userId,
            user,
        )

        return updatedUserLqc
    }
}
