import { prisma } from '../../../../prisma/prisma.js'

export class PostgresGetUserAndWorkStationByUserLqcIdRepository {
    async execute(userId) {
        return await prisma.user_LQC.findUnique({
            where: {
                id: userId,
            },
            include: {
                workstation: true,
            },
        })
    }
}
