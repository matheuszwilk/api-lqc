import { prisma } from '../../../../prisma/prisma.js'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js'
import { AvaliationNotFoundError } from '../../../errors/avaliation.js'

export class PostgresUpdateAvaliationRepository {
    async execute(userId, updateAvaliationParams) {
        try {
            return await prisma.avaliation.update({
                where: {
                    id: userId,
                },
                data: updateAvaliationParams,
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
