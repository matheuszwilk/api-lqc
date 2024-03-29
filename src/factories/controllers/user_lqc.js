import {
    PostgresCreateUserLqcRepository,
    PostgresDeleteUserLqcRepository,
    PostgresGetAllUserLqcRepository,
    PostgresGetUserAndWorkStationByUserLqcIdRepository,
    PostgresGetUserByIdRepository,
    PostgresGetUserByRegistrationRepository,
    PostgresGetUserLqcByIdRepository,
    PostgresUpdateUserLqcRepository,
} from '../../repositories/postgres/index.js'
import {
    CreateUserLqcUseCase,
    DeleteUserLqcUseCase,
    GetAllUsersUseCase,
    GetUserAndWorkStationByUserLqcIdUseCase,
    GetUserLqcByIdUseCase,
    UpdateUserLqcUseCase,
} from '../../use-cases/index.js'
import {
    CreateUserLqcController,
    DeleteUserLqcController,
    GetAllUsersController,
    GetUserAndWorkStationByUserLqcIdController,
    GetUserLqcByIdController,
    UpdateUserLqcController,
} from '../../controllers/index.js'
import { IdGeneratorAdapter } from '../../adapters/index.js'

export const makeCreateUserLqcController = () => {
    const getUserByIdRepository = new PostgresGetUserByIdRepository()
    const getUserByRegistrationRepository =
        new PostgresGetUserByRegistrationRepository()
    const idGeneratorAdapter = new IdGeneratorAdapter()
    const createUserLQCRepository = new PostgresCreateUserLqcRepository()

    const createUserLqcUseCase = new CreateUserLqcUseCase(
        getUserByIdRepository,
        getUserByRegistrationRepository,
        idGeneratorAdapter,
        createUserLQCRepository,
    )

    const createUserLqcController = new CreateUserLqcController(
        createUserLqcUseCase,
    )

    return createUserLqcController
}

export const makeGetAllUserLqcController = () => {
    const getAllUserLqcRepository = new PostgresGetAllUserLqcRepository()

    const getAllUserLqcUseCase = new GetAllUsersUseCase(getAllUserLqcRepository)

    const getAllUserLqcController = new GetAllUsersController(
        getAllUserLqcUseCase,
    )
    return getAllUserLqcController
}

export const makeGetUserLqcByIdController = () => {
    const getUserLqcByIdRepository = new PostgresGetUserLqcByIdRepository()

    const getUserLqcByIdUseCase = new GetUserLqcByIdUseCase(
        getUserLqcByIdRepository,
    )

    const getUserLqcController = new GetUserLqcByIdController(
        getUserLqcByIdUseCase,
    )

    return getUserLqcController
}

export const makeGetUserAndWorkStationByUserLqcIdController = () => {
    const getUserLqcByIdRepository = new PostgresGetUserLqcByIdRepository()

    const getWorkstationByUserIdRepository =
        new PostgresGetUserAndWorkStationByUserLqcIdRepository()

    const getUserAndWorkStationByUserLqcIdUseCase =
        new GetUserAndWorkStationByUserLqcIdUseCase(
            getUserLqcByIdRepository,
            getWorkstationByUserIdRepository,
        )

    const getUserAndWorkStationByUserLqcIdController =
        new GetUserAndWorkStationByUserLqcIdController(
            getUserAndWorkStationByUserLqcIdUseCase,
        )

    return getUserAndWorkStationByUserLqcIdController
}

export const makeDeleteUserLqcController = () => {
    const deleteUserLqcRepository = new PostgresDeleteUserLqcRepository()

    const deleteUserLqcUseCase = new DeleteUserLqcUseCase(
        deleteUserLqcRepository,
    )

    const deleteUserLqcController = new DeleteUserLqcController(
        deleteUserLqcUseCase,
    )

    return deleteUserLqcController
}

export const makeUpdateLqcController = () => {
    const getUserByRegistrationRepository =
        new PostgresGetUserByRegistrationRepository()
    const updateUserLqcRepository = new PostgresUpdateUserLqcRepository()

    const updateUserLqcUseCase = new UpdateUserLqcUseCase(
        getUserByRegistrationRepository,
        updateUserLqcRepository,
    )

    const updateUserLqcController = new UpdateUserLqcController(
        updateUserLqcUseCase,
    )

    return updateUserLqcController
}
