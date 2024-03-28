import { IdGeneratorAdapter } from '../../adapters/index.js'
import { CreateWorkstationController } from '../../controllers/index.js'
import {
    PostgresCreateWorkstationRepository,
    PostgresGetUserLqcByIdRepository,
} from '../../repositories/postgres/index.js'
import { CreateWorkstationUseCase } from '../../use-cases/index.js'

export const makeCreateWorkstationController = () => {
    const createWorkstationRepository =
        new PostgresCreateWorkstationRepository()

    const getUserByIdRepository = new PostgresGetUserLqcByIdRepository()
    const idGeneratorAdapter = new IdGeneratorAdapter()

    const createWorkstationUseCase = new CreateWorkstationUseCase(
        createWorkstationRepository,
        getUserByIdRepository,
        idGeneratorAdapter,
    )

    const createWorkstationController = new CreateWorkstationController(
        createWorkstationUseCase,
    )

    return createWorkstationController
}
