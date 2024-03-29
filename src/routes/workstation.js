import { Router } from 'express'
import {
    makeCreateWorkstationController,
    makeGetWorkstationController,
} from '../factories/controllers/workstation.js'

export const workstationRouter = Router()

workstationRouter.post('/', async (request, response) => {
    const createWorkstationController = makeCreateWorkstationController()

    const { statusCode, body } =
        await createWorkstationController.execute(request)

    response.status(statusCode).send(body)
})

workstationRouter.get('/:userId', async (request, response) => {
    const getWorkstationController = makeGetWorkstationController()

    const { statusCode, body } = await getWorkstationController.execute(request)

    response.status(statusCode).send(body)
})
