import { IdGeneratorAdapter } from '../../adapters/id-generator.js'
import {
    CreateAvaliationController,
    DeleteAvaliationController,
    GetAvaliationByUserIdController,
} from '../../controllers/index.js'
import {
    PostgresCreateAvaliationRepository,
    PostgresDeleteAvaliationRepository,
    PostgresGetAvaliationByUserIdRepository,
    PostgresGetUserLqcByIdRepository,
} from '../../repositories/postgres/index.js'
import {
    CreateAvaliationUseCase,
    DeleteAvaliationUseCase,
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

export const makeGetAvaliationsController = () => {
    const getUserByIdRepository = new PostgresGetUserLqcByIdRepository()

    const getAvaliationByUserIdRepository =
        new PostgresGetAvaliationByUserIdRepository()

    const getAvaliationByUserIdUseCase = new GetAvaliationByUserIdUseCase(
        getUserByIdRepository,
        getAvaliationByUserIdRepository,
    )

    const getAvaliationByUserIdController = new GetAvaliationByUserIdController(
        getAvaliationByUserIdUseCase,
    )

    return getAvaliationByUserIdController
}

export const makeDeleteAvaliationController = () => {
    const deleteAvaliationRepository = new PostgresDeleteAvaliationRepository()

    const deleteAvaliationUseCase = new DeleteAvaliationUseCase(
        deleteAvaliationRepository,
    )

    const deleteAvaliationController = new DeleteAvaliationController(
        deleteAvaliationUseCase,
    )

    return deleteAvaliationController
}
