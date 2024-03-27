import { IdGeneratorAdapter } from '../../adapters/id-generator.js'
import {
    CreateAvaliationController,
    GetAvaliationByUserIdController,
} from '../../controllers/index.js'
import {
    PostgresCreateAvaliationRepository,
    PostgresGetAvaliationByUserIdRepository,
    PostgresGetUserLqcByIdRepository,
} from '../../repositories/postgres/index.js'
import {
    CreateAvaliationUseCase,
    GetAvaliationByUserIdUseCase,
} from '../../use-cases/index.js'

export const makeCreateAvaliationController = () => {
    const createAvaliationRepository = new PostgresCreateAvaliationRepository()

    const getUserByIdLqcRepository = new PostgresGetUserLqcByIdRepository()

    const idGeneratorAdapter = new IdGeneratorAdapter()

    const createAvaliationUseCase = new CreateAvaliationUseCase(
        createAvaliationRepository,
        getUserByIdLqcRepository,
        idGeneratorAdapter,
    )

    const createAvaliationController = new CreateAvaliationController(
        createAvaliationUseCase,
    )

    return createAvaliationController
}

export const makeGetAvaliationController = () => {
    const getAvaliationByUserIdRepository =
        new PostgresGetAvaliationByUserIdRepository()

    const getUserLqcByIdRepository = new PostgresGetUserLqcByIdRepository()

    const getAvaliationByUserIdUseCase = new GetAvaliationByUserIdUseCase(
        getAvaliationByUserIdRepository,
        getUserLqcByIdRepository,
    )

    const getAvaliationByUserIdController = new GetAvaliationByUserIdController(
        getAvaliationByUserIdUseCase,
    )

    return getAvaliationByUserIdController
}
