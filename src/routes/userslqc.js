import { Router } from 'express'
import {
    makeCreateUserLqcController,
    makeDeleteUserLqcController,
    makeGetAllUserLqcController,
    makeGetUserAndAvaliationByUserLqcIdController,
    makeGetUserAndWorkStationByUserLqcIdController,
    makeGetUserLqcByIdController,
    makeUpdateLqcController,
} from '../factories/controllers/user_lqc.js'

export const usersLqcRouter = Router()

usersLqcRouter.post('/', async (request, response) => {
    const createUserController = makeCreateUserLqcController()

    const { statusCode, body } = await createUserController.execute(request)

    response.status(statusCode).send(body)
})

usersLqcRouter.get('/:userId', async (request, response) => {
    const getUserLqcByIdController = makeGetUserLqcByIdController()

    const { statusCode, body } = await getUserLqcByIdController.execute(request)

    response.status(statusCode).send(body)
})

usersLqcRouter.get('/:userId/workstation', async (request, response) => {
    const getUserAndWorkStationByLqcByIdController =
        makeGetUserAndWorkStationByUserLqcIdController()

    const { statusCode, body } =
        await getUserAndWorkStationByLqcByIdController.execute(request)

    response.status(statusCode).send(body)
})

usersLqcRouter.get('/:userId/avaliation', async (request, response) => {
    const getUserAndAvaliationByLqcByIdController =
        makeGetUserAndAvaliationByUserLqcIdController()

    const { statusCode, body } =
        await getUserAndAvaliationByLqcByIdController.execute(request)

    response.status(statusCode).send(body)
})

usersLqcRouter.get('/', async (request, response) => {
    const getUserLqcController = makeGetAllUserLqcController()

    const { statusCode, body } = await getUserLqcController.execute(request)

    response.status(statusCode).send(body)
})

usersLqcRouter.delete('/:userId', async (request, response) => {
    const deleteUserLqcController = makeDeleteUserLqcController()

    const { statusCode, body } = await deleteUserLqcController.execute(request)

    response.status(statusCode).send(body)
})

usersLqcRouter.patch('/:userId', async (request, response) => {
    const updateUserLqcController = makeUpdateLqcController()

    const { statusCode, body } = await updateUserLqcController.execute(request)

    response.status(statusCode).send(body)
})
