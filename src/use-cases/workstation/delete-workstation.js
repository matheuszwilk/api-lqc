export class DeleteWorkstationUseCase {
    constructor(deleteWorkstationRepository) {
        this.deleteWorkstationRepository = deleteWorkstationRepository
    }

    async execute(userId) {
        const workstation =
            await this.deleteWorkstationRepository.execute(userId)

        return workstation
    }
}
