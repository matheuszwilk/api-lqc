import { notFound } from './http.js'

export const AvaliationNotFoundResponse = () => {
    return notFound({ message: 'Avaliation not found.' })
}
