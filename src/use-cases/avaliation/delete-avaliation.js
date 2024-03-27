export class DeleteAvaliationUseCase {
    constructor(deleteAvaliationRepository) {
        this.deleteAvaliationRepository = deleteAvaliationRepository
    }

    async execute(userId) {
        const avaliation = await this.deleteAvaliationRepository.execute(userId)

        return avaliation
    }
}
