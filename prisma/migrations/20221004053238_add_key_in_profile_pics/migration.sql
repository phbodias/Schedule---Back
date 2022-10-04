/*
  Warnings:

  - Added the required column `s3key` to the `profilePics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profilePics" ADD COLUMN     "s3key" TEXT NOT NULL;
