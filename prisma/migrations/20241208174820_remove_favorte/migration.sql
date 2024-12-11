/*
  Warnings:

  - You are about to drop the column `favoriteId` on the `foods` table. All the data in the column will be lost.
  - You are about to drop the `favorite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `Favorite_userId_fkey`;

-- DropForeignKey
ALTER TABLE `foods` DROP FOREIGN KEY `Foods_favoriteId_fkey`;

-- AlterTable
ALTER TABLE `foods` DROP COLUMN `favoriteId`;

-- DropTable
DROP TABLE `favorite`;
