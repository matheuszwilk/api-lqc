import { prisma } from '../../../../prisma/prisma.js'

export class PostgresGetUserLqcByIdRepository {
    async execute(userLQCId) {
        return await prisma.user_LQC.findUnique({
            where: {
                id: userLQCId,
            },
        })
    }
}
