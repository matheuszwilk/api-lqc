import { prisma } from '../../../../prisma/prisma.js'

export class PostgresCreateWorkstationRepository {
    async execute(createWorkstationParams) {
        return await prisma.workStation.create({
            data: createWorkstationParams,
        })
    }
}
