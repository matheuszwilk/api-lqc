import { prisma } from '../../../../prisma/prisma.js'

export class PostgresGetUserLqcByIdRepository {
    async execute(userId) {
        return await prisma.user_LQC.findUnique({
            where: {
                id: userId,
            },
        })
    }
}
