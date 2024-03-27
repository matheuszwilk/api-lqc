import { Router } from 'express'
import {
    makeCreateAvaliationController,
    makeGetAvaliationController,
} from '../factories/controllers/avaliation.js'

export const avaliationRouter = Router()

avaliationRouter.post('/', async (request, response) => {
    const createAvaliationController = makeCreateAvaliationController()

    const { statusCode, body } =
        await createAvaliationController.execute(request)

    response.status(statusCode).send(body)
})

avaliationRouter.get('/:userLqcId', async (request, response) => {
    const createAvaliationController = makeGetAvaliationController()

    const { statusCode, body } =
        await createAvaliationController.execute(request)

    response.status(statusCode).send(body)
})
