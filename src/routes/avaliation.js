import { Router } from 'express'
import {
    makeCreateAvaliationController,
    makeDeleteAvaliationController,
    makeGetAvaliationsController,
    makeUpdateAvaliationController,
} from '../factories/controllers/avaliation.js'

export const avaliationRouter = Router()

avaliationRouter.post('/', async (request, response) => {
    const createAvaliationController = makeCreateAvaliationController()

    const { statusCode, body } =
        await createAvaliationController.execute(request)

    response.status(statusCode).send(body)
})

avaliationRouter.get('', async (request, response) => {
    const getAvaliationController = makeGetAvaliationsController()

    const { statusCode, body } = await getAvaliationController.execute(request)

    response.status(statusCode).send(body)
})

avaliationRouter.delete('/:userId', async (request, response) => {
    const deleteAvaliationController = makeDeleteAvaliationController()

    const { statusCode, body } =
        await deleteAvaliationController.execute(request)

    response.status(statusCode).send(body)
})

avaliationRouter.patch('/:userId', async (request, response) => {
    const updateAvaliationController = makeUpdateAvaliationController()

    const { statusCode, body } =
        await updateAvaliationController.execute(request)

    response.status(statusCode).send(body)
})
