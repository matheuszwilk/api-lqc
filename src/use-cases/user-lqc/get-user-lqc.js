export class GetAllUsersUseCase {
    constructor(getAllUserLqcRepository) {
        this.getAllUserLqcRepository = getAllUserLqcRepository
    }
    async execute() {
        const users = await this.getAllUserLqcRepository.execute()

        return users
    }
}
