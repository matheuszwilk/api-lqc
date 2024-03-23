export class GetUserLqcByIdUseCase {
    constructor({ getUserLqcByIdRepository }) {
        this.getUserLqcByIdRepository = getUserLqcByIdRepository
    }
    async execute(userId) {
        const user = await this.getUserLqcByIdRepository.getUserLqcById(userId)

        return user
    }
}
