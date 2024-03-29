export class WorkstationNotFoundError extends Error {
    constructor(UserId) {
        super(`Workstation with id ${UserId} was not found.`)
        this.name = 'WorkstationNotFoundError'
    }
}
