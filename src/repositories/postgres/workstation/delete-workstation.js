import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js'
import { prisma } from '../../../../prisma/prisma.js'
import { WorkstationNotFoundError } from '../../../errors/index.js'

export class PostgresDeleteWorkstationRepository {
    async execute(workstationId) {
        try {
            return await prisma.workStation.delete({
                where: {
                    id: workstationId,
                },
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
