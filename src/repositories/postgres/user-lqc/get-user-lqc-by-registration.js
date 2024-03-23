import { prisma } from '../../../../prisma/prisma.js'

export class PostgresGetUserByRegistrationRepository {
    async execute(registration) {
        return await prisma.user_LQC.findUnique({
            where: {
                registration,
            },
        })
    }
}
