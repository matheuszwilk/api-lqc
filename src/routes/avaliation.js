import { Router } from 'express'
import { makeCreateAvaliationController } from '../factories/controllers/avaliation.js'

export const avaliationRouter = Router()

avaliationRouter.post('/', async (request, response) => {
    const createAvaliationController = makeCreateAvaliationController()

    const { statusCode, body } =
        await createAvaliationController.execute(request)

    response.status(statusCode).send(body)
})
