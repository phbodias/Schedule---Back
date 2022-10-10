/*
  Warnings:

  - A unique constraint covering the columns `[initials,countrieId]` on the table `states` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `initials` to the `states` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "states" ADD COLUMN     "initials" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "states_initials_countrieId_key" ON "states"("initials", "countrieId");
