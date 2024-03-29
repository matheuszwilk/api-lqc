import { Router } from 'express'
import {
    makeCreateWorkstationController,
    makeDeleteWorkstationController,
    makeGetWorkstationController,
} from '../factories/controllers/workstation.js'

export const workstationRouter = Router()

workstationRouter.post('/', async (request, response) => {
    const createWorkstationController = makeCreateWorkstationController()

    const { statusCode, body } =
        await createWorkstationController.execute(request)

    response.status(statusCode).send(body)
})

workstationRouter.get('', async (request, response) => {
    const getWorkstationController = makeGetWorkstationController()

    const { statusCode, body } = await getWorkstationController.execute(request)

    response.status(statusCode).send(body)
})

workstationRouter.delete('/:workstationId', async (request, response) => {
    const deleteWorkstationController = makeDeleteWorkstationController()

    const { statusCode, body } =
        await deleteWorkstationController.execute(request)

    response.status(statusCode).send(body)
})
