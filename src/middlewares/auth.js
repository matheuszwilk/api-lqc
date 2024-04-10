import { jwtManeger } from '../adapters/token-maneger.js'

export const verifyTokenMiddleware = async (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' })
    }

    try {
        const decoded = jwtManeger.verifyToken(token, process.env.SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({
            message: 'Erro ao verificar o token: ' + error.message,
        })
    }
}
