import { IdGeneratorAdapter } from '../../adapters'
import { CreateAvaliationController } from '../../controllers/index.js'
import {
    PostgresCreateAvaliationRepository,
    PostgresGetUserLqcByIdRepository,
} from '../../repositories/postgres/index.js'
import { CreateAvaliationUseCase } from '../../use-cases/index.js'

export const makeCreateAvaliationController = () => {
    const createAvaliationRepository = new PostgresCreateAvaliationRepository()

    const getUserByIdLqcRepository = new PostgresGetUserLqcByIdRepository()

    const idGeneratorAdapter = new IdGeneratorAdapter()

    const createAvaliationUseCase = CreateAvaliationUseCase(
        createAvaliationRepository,
        getUserByIdLqcRepository,
        idGeneratorAdapter,
    )

    const createAvaliationController = new CreateAvaliationController(
        createAvaliationUseCase,
    )

    return createAvaliationController
}
