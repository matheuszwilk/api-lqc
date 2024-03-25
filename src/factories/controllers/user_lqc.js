import {
    PostgresCreateUserLqcRepository,
    PostgresDeleteUserLqcRepository,
    PostgresGetAllUserLqcRepository,
    PostgresGetUserByIdRepository,
    PostgresGetUserByRegistrationRepository,
    PostgresGetUserLqcByIdRepository,
} from '../../repositories/postgres/index.js'
import {
    CreateUserLqcUseCase,
    DeleteUserLqcUseCase,
    GetAllUsersUseCase,
    GetUserLqcByIdUseCase,
} from '../../use-cases/index.js'
import {
    CreateUserLqcController,
    GetAllUsersController,
    GetUserLqcByIdController,
} from '../../controllers/index.js'
import { IdGeneratorAdapter } from '../../adapters/index.js'
import { DeleteUserLqcController } from '../../controllers/user-lqc/delete-user-lqc.js'

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
