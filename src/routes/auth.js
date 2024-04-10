import { Router } from 'express'
import { makeLoginController } from '../factories/controllers/login.js'

export const loginRouter = Router()

loginRouter.post('', async (request, response) => {
    const loginController = makeLoginController()

    const { statusCode, body } = await loginController.execute(request)

    response.status(statusCode).send(body)
})
