import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class PostgresGetAvaliationByUserIdRepository {
    async execute(userId) {
        return await prisma.avaliation.findMany({
            where: {
                user_lqc_id: userId,
            },
        })
    }
}
