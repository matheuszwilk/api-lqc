import { jwtManeger } from '../../adapters/token-maneger.js'

export class LoginUseCase {
    execute(payload) {
        const token = jwtManeger.gerarToken(payload)

        return token
    }
}
