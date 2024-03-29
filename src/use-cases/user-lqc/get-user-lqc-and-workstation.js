export class GetUserAndWorkStationByUserLqcIdUseCase {
    constructor(getUserAndWorkStationByUserLqcIdRepository) {
        this.getUserAndWorkStationByUserLqcIdRepository =
            getUserAndWorkStationByUserLqcIdRepository
    }
    async execute(userId) {
        const user =
            await this.getUserAndWorkStationByUserLqcIdRepository.execute(
                userId,
            )

        return user
    }
}
