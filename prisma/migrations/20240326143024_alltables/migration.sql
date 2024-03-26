/*
  Warnings:

  - You are about to drop the column `user_id` on the `Avaliation` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `WorkStation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Avaliation" DROP CONSTRAINT "Avaliation_user_id_fkey";

-- DropForeignKey
ALTER TABLE "WorkStation" DROP CONSTRAINT "WorkStation_user_id_fkey";

-- AlterTable
ALTER TABLE "Avaliation" DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "WorkStation" DROP COLUMN "user_id";
