import { prisma } from '../../../../prisma/prisma.js'

export class PostgresGetAvaliationByUserIdRepository {
    async execute(userLqcId) {
        return await prisma.avaliation.findMany({
            where: {
                user_id: userLqcId,
            },
        })
    }
}
