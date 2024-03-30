import express from 'express'
import {
    usersRouter,
    usersLqcRouter,
    avaliationRouter,
    workstationRouter,
} from './routes/index.js'

export const app = express()

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/userslqc', usersLqcRouter)
app.use('/api/avaliation', avaliationRouter)
app.use('/api/workstation', workstationRouter)
