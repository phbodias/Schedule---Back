/*
  Warnings:

  - A unique constraint covering the columns `[city,stateId]` on the table `cities` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `city` to the `cities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cities" ADD COLUMN     "city" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "cities_city_stateId_key" ON "cities"("city", "stateId");
