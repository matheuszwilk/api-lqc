import { UserNotFoundError } from '../../errors/user.js'

export class CreateAvaliationUseCase {
    constructor(
        createAvaliationRepository,
        getUserByIdLqcRepository,
        idGeneratorAdapter,
    ) {
        this.createAvaliationRepository = createAvaliationRepository
        this.getUserByIdLqcRepository = getUserByIdLqcRepository
        this.idGeneratorAdapter = idGeneratorAdapter
    }

    async execute(createAvaliationParams) {
        const userLqcId = createAvaliationParams.user_lqc_id

        const userLqc = await this.getUserByIdLqcRepository.execute(userLqcId)

        if (!userLqc) {
            throw new UserNotFoundError(userLqcId)
        }

        const avaliationIdLqc = this.idGeneratorAdapter.execute()

        const avaliation = await this.createAvaliationRepository.execute({
            ...createAvaliationParams,
            id: avaliationIdLqc,
        })

        return avaliation
    }
}
