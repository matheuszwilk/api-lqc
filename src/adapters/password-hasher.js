import bcrypt from 'bcrypt'

export class PasswordHasherAdapter {
    hash(password) {
        return bcrypt.hash(password, 10)
    }

    compare(password, hashedPassword) {
        return bcrypt.compare(password, hashedPassword)
    }
}
