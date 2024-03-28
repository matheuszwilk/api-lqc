import { Router } from 'express'
import { makeCreateWorkstationController } from '../factories/controllers/workstation'

export const workstationRouter = Router()

workstationRouter.post('/', async (request, response) => {
    const createWorkstationController = makeCreateWorkstationController()

    const { statusCode, body } =
        await createWorkstationController.execute(request)

    response.status(statusCode).send(body)
})
