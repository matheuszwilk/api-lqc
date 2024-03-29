export class UpdateWorkStationUseCase {
    constructor(updateWorkStationRepository) {
        this.updateWorkStationRepository = updateWorkStationRepository
    }

    async execute(workstationId, updateWorkStationParams) {
        const workstation = await this.updateWorkStationRepository.execute(
            workstationId,
            updateWorkStationParams,
        )

        return workstation
    }
}
