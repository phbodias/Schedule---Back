/*
  Warnings:

  - You are about to drop the column `establishmentId` on the `professionals` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `professionals` table. All the data in the column will be lost.
  - You are about to drop the `backgroundPics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `establishments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `establishmentsPhones` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `establishmentsPics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `neighborhoods` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `phones` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[phone]` on the table `professionals` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `professionals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `professionals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `professionals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilePic` to the `professionals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "backgroundPics" DROP CONSTRAINT "backgroundPics_establishmentId_fkey";

-- DropForeignKey
ALTER TABLE "establishments" DROP CONSTRAINT "establishments_neighborhoodId_fkey";

-- DropForeignKey
ALTER TABLE "establishmentsPhones" DROP CONSTRAINT "establishmentsPhones_establishmentId_fkey";

-- DropForeignKey
ALTER TABLE "establishmentsPics" DROP CONSTRAINT "establishmentsPics_establishmentId_fkey";

-- DropForeignKey
ALTER TABLE "neighborhoods" DROP CONSTRAINT "neighborhoods_citieId_fkey";

-- DropForeignKey
ALTER TABLE "phones" DROP CONSTRAINT "phones_userId_fkey";

-- DropForeignKey
ALTER TABLE "professionals" DROP CONSTRAINT "professionals_establishmentId_fkey";

-- DropForeignKey
ALTER TABLE "professionals" DROP CONSTRAINT "professionals_userId_fkey";

-- AlterTable
ALTER TABLE "professionals" DROP COLUMN "establishmentId",
DROP COLUMN "userId",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL,
ADD COLUMN     "profilePic" TEXT NOT NULL;

-- DropTable
DROP TABLE "backgroundPics";

-- DropTable
DROP TABLE "establishments";

-- DropTable
DROP TABLE "establishmentsPhones";

-- DropTable
DROP TABLE "establishmentsPics";

-- DropTable
DROP TABLE "neighborhoods";

-- DropTable
DROP TABLE "phones";

-- CreateTable
CREATE TABLE "schedule" (
    "id" SERIAL NOT NULL,
    "professionalId" INTEGER NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "free" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scheduled" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "scheduleId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Scheduled_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Scheduled_scheduleId_key" ON "Scheduled"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "professionals_phone_key" ON "professionals"("phone");

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professionals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scheduled" ADD CONSTRAINT "Scheduled_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Scheduled" ADD CONSTRAINT "Scheduled_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "schedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
