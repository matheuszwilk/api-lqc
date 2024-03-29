import {
    PostgresCreateUserLqcRepository,
    PostgresDeleteUserLqcRepository,
    PostgresGetAllUserLqcRepository,
    PostgresGetUserAndAvaliationByUserLqcIdRepository,
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
    GetUserAndAvaliationByUserLqcIdUseCase,
    GetUserAndWorkStationByUserLqcIdUseCase,
    GetUserLqcByIdUseCase,
    UpdateUserLqcUseCase,
} from '../../use-cases/index.js'
import {
    CreateUserLqcController,
    DeleteUserLqcController,
    GetAllUsersController,
    GetUserAndAvaliationByUserLqcIdController,
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

    const getUserAndWorkstationByUserIdRepository =
        new PostgresGetUserAndWorkStationByUserLqcIdRepository()

    const getUserAndWorkStationByUserLqcIdUseCase =
        new GetUserAndWorkStationByUserLqcIdUseCase(
            getUserLqcByIdRepository,
            getUserAndWorkstationByUserIdRepository,
        )

    const getUserAndWorkStationByUserLqcIdController =
        new GetUserAndWorkStationByUserLqcIdController(
            getUserAndWorkStationByUserLqcIdUseCase,
        )

    return getUserAndWorkStationByUserLqcIdController
}

export const makeGetUserAndAvaliationByUserLqcIdController = () => {
    const getUserLqcByIdRepository = new PostgresGetUserLqcByIdRepository()

    const getUserAndAvaliationByUserIdRepository =
        new PostgresGetUserAndAvaliationByUserLqcIdRepository()

    const getUserAndAvaliationByUserLqcIdUseCase =
        new GetUserAndAvaliationByUserLqcIdUseCase(
            getUserLqcByIdRepository,
            getUserAndAvaliationByUserIdRepository,
        )

    const getUserAndAvaliationByUserLqcIdController =
        new GetUserAndAvaliationByUserLqcIdController(
            getUserAndAvaliationByUserLqcIdUseCase,
        )

    return getUserAndAvaliationByUserLqcIdController
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
