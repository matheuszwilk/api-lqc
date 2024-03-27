import { UserNotFoundError } from '../../errors/user.js'

export class GetAvaliationByUserIdUseCase {
    constructor(getUserByIdRepository, getAvaliationByUserIdRepository) {
        this.getUserByIdRepository = getUserByIdRepository
        this.getAvaliationByUserIdRepository = getAvaliationByUserIdRepository
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
