import { prisma } from '../../../../prisma/prisma.js'

export class PostgresCreateUserLqcRepository {
    async execute(createUserParams) {
        const userLQC = await prisma.user_LQC.create({
            data: {
                id: createUserParams.id,
                user_id: createUserParams.user_id,
                first_name: createUserParams.first_name,
                last_name: createUserParams.last_name,
                registration: createUserParams.registration,
                position: createUserParams.position,
                admission_date: createUserParams.admission_date,
            },
        })

        return userLQC
    }
}
