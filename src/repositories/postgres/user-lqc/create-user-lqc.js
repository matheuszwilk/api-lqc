import { prisma } from '../../../../prisma/prisma.js'

export class PostgresCreateUserLqcRepository {
    async execute(createUserParams) {
        const userLQC = await prisma.user_LQC.create({
            data: createUserParams,
        })
        return userLQC
    }
}
