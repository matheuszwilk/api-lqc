import {
    RegistrationAlreadyInUseError,
    UserNotFoundError,
} from '../../errors/user.js'

export class CreateUserLqcUseCase {
    constructor(
        getUserByIdRepository,
        getUserByRegistrationRepository,
        idGeneratorAdapter,
        createUserRepository,
    ) {
        this.getUserByIdRepository = getUserByIdRepository
        this.getUserByRegistrationRepository = getUserByRegistrationRepository
        this.idGeneratorAdapter = idGeneratorAdapter
        this.createUserRepository = createUserRepository
    }

    async execute(createUserLqcParams) {
        const userID = createUserLqcParams.user_id
        const user = await this.getUserByIdRepository.execute(userID)

        if (!user) {
            throw new UserNotFoundError(userID)
        }

        const userWithProvidedRegistration =
            await this.getUserByRegistrationRepository.execute(
                createUserLqcParams.registration,
            )

        if (userWithProvidedRegistration) {
            throw new RegistrationAlreadyInUseError(
                createUserLqcParams.registration,
            )
        }

        const userLqcId = this.idGeneratorAdapter.execute()

        const userLQC = {
            ...createUserLqcParams,
            id: userLqcId,
        }

        const createdUser = await this.createUserRepository.execute(userLQC)

        return createdUser
    }
}
