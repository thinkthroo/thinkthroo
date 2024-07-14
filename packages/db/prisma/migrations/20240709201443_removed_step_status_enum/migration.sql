/*
  Warnings:

  - You are about to drop the column `status` on the `Step` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Step" DROP COLUMN "status";

-- DropEnum
DROP TYPE "StepStatus";
