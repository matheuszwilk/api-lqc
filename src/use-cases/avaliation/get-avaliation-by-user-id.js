import { UserNotFoundError } from '../../errors/user.js'

export class GetAvaliationByUserIdUseCase {
    constructor(getAvaliationByUserIdRepository, getUserByIdRepository) {
        this.getAvaliationByUserIdRepository = getAvaliationByUserIdRepository
        this.getUserByIdRepository = getUserByIdRepository
    }

    async execute(userId) {
        const user = await this.getUserByIdRepository.execute(userId)

        if (!user) {
            throw new UserNotFoundError(userId)
        }

        const avaliation =
            await this.getAvaliationByUserIdRepository.execute(userId)

        return avaliation
    }
}
