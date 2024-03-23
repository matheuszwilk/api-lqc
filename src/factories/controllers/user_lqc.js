import {
    PostgresCreateUserLqcRepository,
    PostgresDeleteUserLqcRepository,
    PostgresGetUserByIdRepository,
    PostgresGetUserByRegistrationRepository,
    PostgresGetUserLqcByIdRepository,
} from '../../repositories/postgres/index.js'
import {
    CreateUserLqcUseCase,
    DeleteUserLqcUseCase,
    GetUserLqcByIdUseCase,
} from '../../use-cases/index.js'
import {
    CreateUserLqcController,
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

export const makeGetUserLqcByIdController = () => {
    const getUserLqcByIdRepository = new PostgresGetUserLqcByIdRepository()

    const getUserLqcUseCase = new GetUserLqcByIdUseCase(
        getUserLqcByIdRepository,
    )

    const getUserLqcController = new GetUserLqcByIdController(getUserLqcUseCase)

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
