export class UpdateWorkStationUseCase {
    constructor(updateWorkStationRepository) {
        this.updateWorkStationRepository = updateWorkStationRepository
    }

    async execute(userId, updateWorkStationParams) {
        const workstation = await this.updateWorkStationRepository.execute(
            userId,
            updateWorkStationParams,
        )

        return workstation
    }
}
