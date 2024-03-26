import { prisma } from '../../../../prisma/prisma.js'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js'
import { UserNotFoundError } from '../../../errors/user.js'

export class PostgresUpdateUserLqcRepository {
    async execute(userId, updateUserLqcParams) {
        try {
            return await prisma.user_LQC.update({
                where: {
                    id: userId,
                },
                data: updateUserLqcParams,
            })
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                // P2025 = "An operation failed because it depends on one or more records that were required but not found" (from Prisma docs)
                if (error.code === 'P2025') {
                    throw new UserNotFoundError(userId)
                }
            }

            throw error
        }
    }
}
