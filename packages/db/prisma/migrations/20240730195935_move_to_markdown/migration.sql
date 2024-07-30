/*
  Warnings:

  - You are about to drop the column `strapi_id` on the `Challenge` table. All the data in the column will be lost.
  - You are about to drop the column `strapi_id` on the `Solution` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Challenge" DROP COLUMN "strapi_id",
ADD COLUMN     "markdown" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Solution" DROP COLUMN "strapi_id",
ADD COLUMN     "markdown" TEXT NOT NULL DEFAULT '';
