/*
  Warnings:

  - You are about to drop the `profilePics` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "profilePics" DROP CONSTRAINT "profilePics_userId_fkey";

-- AlterTable
ALTER TABLE "schedule" ALTER COLUMN "free" SET DEFAULT true;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "profilePic" TEXT NOT NULL DEFAULT '../images/defaultProfilepic/index.jpeg';

-- DropTable
DROP TABLE "profilePics";
