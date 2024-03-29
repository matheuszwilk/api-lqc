import { IdGeneratorAdapter } from '../../adapters/index.js'
import {
    CreateWorkstationController,
    DeleteWorkstationController,
    GetWorkstationByUserIdController,
    UpdateWorkStationController,
} from '../../controllers/index.js'
import {
    PostgresCreateWorkstationRepository,
    PostgresDeleteWorkstationRepository,
    PostgresGetUserLqcByIdRepository,
    PostgresGetWorkstationUserIdRepository,
    PostgresUpdateWorkStationRepository,
} from '../../repositories/postgres/index.js'
import {
    CreateWorkstationUseCase,
    DeleteWorkstationUseCase,
    GetWorkstationByUserIdUseCase,
    UpdateWorkStationUseCase,
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
    const getUserByIdRepository = new PostgresGetUserLqcByIdRepository()

    const getWorkstationByUserIdRepository =
        new PostgresGetWorkstationUserIdRepository()

    const getWorkstationByUserIdUseCase = new GetWorkstationByUserIdUseCase(
        getUserByIdRepository,
        getWorkstationByUserIdRepository,
    )

    const getWorkstationByUserIdController =
        new GetWorkstationByUserIdController(getWorkstationByUserIdUseCase)

    return getWorkstationByUserIdController
}

export const makeDeleteWorkstationController = () => {
    const deleteWorkstationRepository =
        new PostgresDeleteWorkstationRepository()

    const deleteWorkstationUseCase = new DeleteWorkstationUseCase(
        deleteWorkstationRepository,
    )

    const deleteWorkstationController = new DeleteWorkstationController(
        deleteWorkstationUseCase,
    )

    return deleteWorkstationController
}

export const makeUpdateWorkstationController = () => {
    const updateWorkStationRepository =
        new PostgresUpdateWorkStationRepository()

    const updateWorkStationUseCase = new UpdateWorkStationUseCase(
        updateWorkStationRepository,
    )

    const updateWorkStationController = new UpdateWorkStationController(
        updateWorkStationUseCase,
    )

    return updateWorkStationController
}
