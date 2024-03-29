import { UserNotFoundError } from '../../errors/user.js'

export class GetUserAndAvaliationByUserLqcIdUseCase {
    constructor(getUserByIdRepository, getUserAndAvaliationByUserIdRepository) {
        this.getUserByIdRepository = getUserByIdRepository
        this.getUserAndAvaliationByUserIdRepository =
            getUserAndAvaliationByUserIdRepository
    }
    async execute(userId) {
        const user = await this.getUserByIdRepository.execute(userId)

        if (!user) {
            throw new UserNotFoundError(userId)
        }

        const avaliation =
            await this.getUserAndAvaliationByUserIdRepository.execute(userId)

        return avaliation
    }
}
