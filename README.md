# User LQC Management System

This repository contains the source code for a User LQC (Line Quality Control) management system. It provides functionalities for managing users, their evaluations, workstations, and related data. The system is built using Node.js, Express.js, and Prisma ORM, with a PostgreSQL database.

## Dependencies

- **@prisma/client**: 5.7.0
- **bcrypt**: 5.1.0
- **dayjs**: 1.11.10
- **dotenv**: 16.3.1
- **dotenv-cli**: 7.3.0
- **express**: 4.18.2
- **pg**: 8.11.2
- **uuid**: 9.0.0
- **validator**: 13.11.0
- **zod**: 3.22.4

## Scripts

- **test**: Run tests using Jest with environment variables from `.env.test`.
- **test:watch**: Run tests in watch mode.
- **test:coverage**: Run tests with coverage report.
- **postinstall**: Install Husky Git hooks and generate Prisma client.
- **start:dev**: Start the application in development mode with nodemon watching for changes.

## Database Configuration

The system uses PostgreSQL as its database provider. Ensure you have a PostgreSQL database set up and provide the connection URL through the `DATABASE_URL` environment variable.

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

## Data Models

The system consists of the following data models:

### User

- **id**: Unique identifier for the user.
- **first_name**: First name of the user.
- **last_name**: Last name of the user.
- **email**: Unique email address of the user.
- **password**: Password of the user.
- **user_lqc**: Associated LQC (Line Quality Control) records for the user.

### User_LQC

- **id**: Unique identifier for the LQC record.
- **user_id**: Foreign key referencing the associated user.
- **first_name**: First name of the user.
- **last_name**: Last name of the user.
- **registration**: Unique registration code for the user.
- **position**: Position type of the user.
- **admission_date**: Date of admission for the user.
- **imageUrl**: Url image of the user LQC.
- **avaliations**: Evaluations associated with the user.
- **workstation**: Workstations assigned to the user.

### Avaliation

- **id**: Unique identifier for the evaluation.
- **user_lqc_id**: Foreign key referencing the associated LQC record.
- **type**: Type of evaluation.
- **score**: Score of the evaluation.
- **date**: Date of the evaluation.
- **imageUrl**: Url image of the evaluation.
- **comment**: Additional comments for the evaluation.

### WorkStation

- **id**: Unique identifier for the workstation.
- **user_lqc_id**: Foreign key referencing the associated LQC record.
- **station_type**: Type of workstation.
- **line_type**: Type of production line.
- **Able**: Boolean indicating if the workstation is able to work.

## Enums

The system includes several enums for defining types:

- **position_type**: Defines the position types.
- **avaliation_type**: Defines types of evaluations.
- **station_name_type**: Defines types of workstations.
- **line_type**: Defines types of production lines.

## Usage

To use this system, ensure you have Node.js and npm installed on your machine. Clone this repository and install dependencies using `npm install`. Configure your PostgreSQL database connection URL in a `.env` file. Then, run the application using `npm start`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
