import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PostgresGetWorkstationUserIdRepository {
    async execute(userId) {
        return await prisma.workStation.findMany({
            where: {
                user_lqc_id: userId,
            },
        })
    }
}
