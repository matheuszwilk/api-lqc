export class DeleteUserLqcUseCase {
    constructor(deleteUserLqcRepository) {
        this.deleteUserLqcRepository = deleteUserLqcRepository
    }
    async execute(userId) {
        const deleteUserLqc = await this.deleteUserLqcRepository.execute(userId)

        return deleteUserLqc
    }
}
