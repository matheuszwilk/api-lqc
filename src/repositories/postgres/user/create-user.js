import { prisma } from '../../../../prisma/prisma.js'

export class PostgresCreateUserRepository {
    async execute(createUserParams) {
        const user = await prisma.user.create({
            data: createUserParams,
        })
        return user
    }
}
