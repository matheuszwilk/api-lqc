import { UserNotFoundError } from '../../errors/user.js'

export class CreateWorkstationUseCase {
    constructor(
        createWorkstationRepository,
        getUserByIdLqcRepository,
        idGeneratorAdapter,
    ) {
        this.createWorkstationRepository = createWorkstationRepository
        this.getUserByIdLqcRepository = getUserByIdLqcRepository
        this.idGeneratorAdapter = idGeneratorAdapter
    }

    async execute(createWorkstationParams) {
        const userLqcId = createWorkstationParams.user_lqc_id

        const userLqc = await this.getUserByIdLqcRepository.execute(userLqcId)

        if (!userLqc) {
            throw new UserNotFoundError(userLqcId)
        }

        const avaliationIdLqc = this.idGeneratorAdapter.execute()

        const avaliation = await this.createWorkstationRepository.execute({
            ...createWorkstationParams,
            id: avaliationIdLqc,
        })

        return avaliation
    }
}
