-- CreateEnum
CREATE TYPE "position_type" AS ENUM ('Operator_A', 'Operator_B');

-- CreateEnum
CREATE TYPE "avaliation_type" AS ENUM ('CLEANING_5S', 'DISCIPLINE', 'COMMITMENT', 'IMPROVEMENTS', 'AUDITS', 'DETECTION', 'DEFECT_LEVEL', 'OQC_DETECTION', 'WARNINGS', 'OTHERS');

-- CreateEnum
CREATE TYPE "station_name_type" AS ENUM ('APPEARANCE', 'CONNECTION', 'DISCONNECTION', 'MICROWAVE_LEAK_TEST', 'FUNCTIONAL_TEST_1', 'FUNCTIONAL_TEST_2', 'LEAK_TEST', 'PANEL_TEST', 'MEMBRANE_TEST');

-- CreateEnum
CREATE TYPE "line_type" AS ENUM ('AA1', 'AC1', 'AC2', 'AC3', 'AM1');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_LQC" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "registration" VARCHAR(50) NOT NULL,
    "position" "position_type" NOT NULL,
    "admission_date" DATE NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "User_LQC_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliation" (
    "id" UUID NOT NULL,
    "user_lqc_id" UUID NOT NULL,
    "type" "avaliation_type" NOT NULL,
    "score" DECIMAL(2,0) NOT NULL,
    "date" DATE NOT NULL,
    "imageUrl" TEXT,
    "comment" VARCHAR(2000),

    CONSTRAINT "Avaliation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkStation" (
    "id" UUID NOT NULL,
    "user_lqc_id" UUID NOT NULL,
    "station_type" "station_name_type" NOT NULL,
    "line_type" "line_type" NOT NULL,
    "Able" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "WorkStation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_LQC_registration_key" ON "User_LQC"("registration");

-- AddForeignKey
ALTER TABLE "User_LQC" ADD CONSTRAINT "User_LQC_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Avaliation" ADD CONSTRAINT "Avaliation_user_lqc_id_fkey" FOREIGN KEY ("user_lqc_id") REFERENCES "User_LQC"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "WorkStation" ADD CONSTRAINT "WorkStation_user_lqc_id_fkey" FOREIGN KEY ("user_lqc_id") REFERENCES "User_LQC"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
