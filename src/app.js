import express from 'express'
import {
    usersRouter,
    transactionsRouter,
    usersLqcRouter,
    avaliationRouter,
} from './routes/index.js'

export const app = express()

app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/userslqc', usersLqcRouter)
app.use('/api/transactions', transactionsRouter)
app.use('/api/avaliation', avaliationRouter)
