/*
  Warnings:

  - You are about to drop the column `images` on the `foods` table. All the data in the column will be lost.
  - Added the required column `image` to the `Foods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `foods` DROP COLUMN `images`,
    ADD COLUMN `image` LONGTEXT NOT NULL,
    ADD COLUMN `rating` DOUBLE NULL DEFAULT 0,
    ADD COLUMN `specialOffer` BOOLEAN NOT NULL DEFAULT false;
