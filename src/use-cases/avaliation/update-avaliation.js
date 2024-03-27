export class UpdateAvaliationUseCase {
    constructor(updateAvaliationRepository) {
        this.updateAvaliationRepository = updateAvaliationRepository
    }

    async execute(userId, updateAvaliationParams) {
        const avaliation = await this.updateAvaliationRepository.execute(
            userId,
            updateAvaliationParams,
        )

        return avaliation
    }
}
