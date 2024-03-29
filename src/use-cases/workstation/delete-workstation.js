export class DeleteWorkstationUseCase {
    constructor(deleteWorkstationRepository) {
        this.deleteWorkstationRepository = deleteWorkstationRepository
    }

    async execute(workstationId) {
        const workstation =
            await this.deleteWorkstationRepository.execute(workstationId)

        return workstation
    }
}
