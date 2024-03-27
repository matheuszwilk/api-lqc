import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js'
import { prisma } from '../../../../prisma/prisma.js'
import { AvaliationNotFoundError } from '../../../errors/index.js'

export class PostgresDeleteAvaliationRepository {
    async execute(userId) {
        try {
            return await prisma.avaliation.delete({
                where: {
                    id: userId,
                },
            })
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // P2025 = "An operation failed because it depends on one or more records that were required but not found" (from Prisma docs)
                if (error.code === 'P2025') {
                    throw new AvaliationNotFoundError(userId)
                }
            }

            throw error
        }
    }
}
