import { prisma } from '../../../../prisma/prisma.js'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js'
import { WorkstationNotFoundError } from '../../../errors/workstation.js'

export class PostgresUpdateWorkStationRepository {
    async execute(workstationId, updateWorkStationParams) {
        try {
            return await prisma.workStation.update({
                where: {
                    id: workstationId,
                },
                data: updateWorkStationParams,
            })
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // P2025 = "An operation failed because it depends on one or more records that were required but not found" (from Prisma docs)
                if (error.code === 'P2025') {
                    throw new WorkstationNotFoundError(workstationId)
                }
            }

            throw error
        }
    }
}
