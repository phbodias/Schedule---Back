/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `profilePics` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "profilePics_userId_key" ON "profilePics"("userId");
