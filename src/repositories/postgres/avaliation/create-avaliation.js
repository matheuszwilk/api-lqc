import { prisma } from '../../../../prisma/prisma.js'

export class PostgresCreateAvaliationRepository {
    async execute(createAvaliationParams) {
        return await prisma.avaliation.create({
            data: createAvaliationParams,
        })
    }
}
