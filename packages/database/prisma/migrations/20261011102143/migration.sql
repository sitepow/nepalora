/*
  Warnings:

  - Added the required column `maxSeats` to the `TourSchedule` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TourStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "ScheduleStatus" AS ENUM ('OPEN', 'FULL', 'CLOSED');

-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "seatCount" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "images" TEXT[],
ADD COLUMN     "status" "TourStatus" NOT NULL DEFAULT 'DRAFT';

-- AlterTable
ALTER TABLE "TourSchedule" ADD COLUMN     "maxSeats" INTEGER NOT NULL,
ADD COLUMN     "status" "ScheduleStatus" NOT NULL DEFAULT 'OPEN';
