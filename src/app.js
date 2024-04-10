import express from 'express'
import {
    usersRouter,
    usersLqcRouter,
    avaliationRouter,
    workstationRouter,
    loginRouter,
} from './routes/index.js'
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/users', usersRouter)
app.use('/api/userslqc', usersLqcRouter)
app.use('/api/avaliation', avaliationRouter)
app.use('/api/workstation', workstationRouter)
app.use('/api/login', loginRouter)
