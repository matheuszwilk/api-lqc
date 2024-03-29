import { UserNotFoundError } from '../../errors/user.js'

export class GetUserAndWorkStationByUserLqcIdUseCase {
    constructor(
        getUserByIdRepository,
        getUserAndWorkstationByUserIdRepository,
    ) {
        this.getUserByIdRepository = getUserByIdRepository
        this.getUserAndWorkstationByUserIdRepository =
            getUserAndWorkstationByUserIdRepository
    }
    async execute(userId) {
        const user = await this.getUserByIdRepository.execute(userId)

        if (!user) {
            throw new UserNotFoundError(userId)
        }

        const workstation =
            await this.getUserAndWorkstationByUserIdRepository.execute(userId)

        return workstation
    }
}
