import { prisma } from '../../../../prisma/prisma.js'

export class PostgresGetAllUserLqcRepository {
    async execute() {
        const data = await prisma.user_LQC.findMany()

        return data
    }
}
