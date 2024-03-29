import { IdGeneratorAdapter } from '../../adapters/index.js'
import {
    CreateWorkstationController,
    GetWorkstationByUserIdController,
} from '../../controllers/index.js'
import {
    PostgresCreateWorkstationRepository,
    PostgresGetUserLqcByIdRepository,
    PostgresGetWorkstationUserIdRepository,
} from '../../repositories/postgres/index.js'
import {
    CreateWorkstationUseCase,
    GetWorkstationByUserIdUseCase,
} from '../../use-cases/index.js'

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

export const makeGetWorkstationController = () => {
    const getWorkstationByUserIdRepository =
        new PostgresGetWorkstationUserIdRepository()

    const getUserByIdRepository = new PostgresGetUserLqcByIdRepository()

    const getWorkstationByUserIdUseCase = GetWorkstationByUserIdUseCase(
        getWorkstationByUserIdRepository,
        getUserByIdRepository,
    )

    const getWorkstationByUserIdController =
        new GetWorkstationByUserIdController(getWorkstationByUserIdUseCase)

    return getWorkstationByUserIdController
}
