import jwt from 'jsonwebtoken'

class JwtManeger {
    async gerarToken(payload) {
        try {
            const token = jwt.sign(payload, process.env.SECRET, {
                expiresIn: '2h',
            })
            return { auth: true, token }
        } catch (error) {
            throw new Error('Erro ao gerar o token: ' + error.message)
        }
    }

    async verifyToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET)
            return decoded
        } catch (error) {
            throw new Error('Erro ao verificar o token: ' + error.message)
        }
    }
}

export const jwtManeger = new JwtManeger(process.env.SECRET)
