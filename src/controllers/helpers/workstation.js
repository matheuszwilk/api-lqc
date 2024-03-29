import { notFound } from './http.js'

export const WorkstationNotFoundResponse = () => {
    return notFound({ message: 'Workstation not found.' })
}
