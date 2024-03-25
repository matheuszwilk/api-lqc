import { Router } from 'express'
import {
    makeCreateUserLqcController,
    makeDeleteUserLqcController,
    makeGetAllUserLqcController,
    makeGetUserLqcByIdController,
} from '../factories/controllers/user_lqc.js'

export const usersLqcRouter = Router()

usersLqcRouter.post('/', async (request, response) => {
    const createUserController = makeCreateUserLqcController()

    const { statusCode, body } = await createUserController.execute(request)

    response.status(statusCode).send(body)
})

usersLqcRouter.get('/', async (request, response) => {
    const getUserLqcController = makeGetAllUserLqcController()

    const { statusCode, body } = await getUserLqcController.execute(request)

    response.status(statusCode).send(body)
})

usersLqcRouter.get('/:userId', async (request, response) => {
    const getUserLqcByIdController = makeGetUserLqcByIdController()

    const { statusCode, body } = await getUserLqcByIdController.execute(request)

    response.status(statusCode).send(body)
})

usersLqcRouter.delete('/:userId', async (request, response) => {
    const deleteUserLqcController = makeDeleteUserLqcController()

    const { statusCode, body } = await deleteUserLqcController.execute(request)

    response.status(statusCode).send(body)
})
