import { UserNotFoundError } from '../../errors/user.js'

export class GetWorkstationByUserIdUseCase {
    constructor(getUserByIdRepository, getWorkstationByUserIdRepository) {
        this.getUserByIdRepository = getUserByIdRepository
        this.getWorkstationByUserIdRepository = getWorkstationByUserIdRepository
    }

    async execute(userId) {
        const user = await this.getUserByIdRepository.execute(userId)

        if (!user) {
            throw new UserNotFoundError(userId)
        }

        const workstation =
            await this.getWorkstationByUserIdRepository.execute(userId)

        return workstation
    }
}
