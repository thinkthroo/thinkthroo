-- AlterTable
ALTER TABLE "Challenge" ADD COLUMN     "draft" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Solution" ADD COLUMN     "draft" TEXT NOT NULL DEFAULT '';
