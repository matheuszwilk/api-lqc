export class AvaliationNotFoundError extends Error {
    constructor(UserId) {
        super(`Avaliation with id ${UserId} was not found.`)
        this.name = 'AvaliationNotFoundError'
    }
}
