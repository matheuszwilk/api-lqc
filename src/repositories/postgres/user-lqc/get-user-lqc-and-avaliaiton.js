import { prisma } from '../../../../prisma/prisma.js'

export class PostgresGetUserAndAvaliationByUserLqcIdRepository {
    async execute(userId) {
        return await prisma.user_LQC.findUnique({
            where: {
                id: userId,
            },
            include: {
                avaliations: true,
            },
        })
    }
}
