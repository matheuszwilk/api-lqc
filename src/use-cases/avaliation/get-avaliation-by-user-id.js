import { UserNotFoundError } from '../../errors/user.js'

export class GetAvaliationByUserIdUseCase {
    constructor(getAvaliationByUserIdRepository, getUserLqcByIdRepository) {
        this.getAvaliationByUserIdRepository = getAvaliationByUserIdRepository
        this.getUserLqcByIdRepository = getUserLqcByIdRepository
    }

    async execute(userLqcId) {
        const user = await this.getUserLqcByIdRepository.execute(userLqcId)

        if (!user) {
            throw new UserNotFoundError(userLqcId)
        }

        const avaliation =
            await this.getAvaliationByUserIdRepository.execute(userLqcId)

        return avaliation
    }
}
