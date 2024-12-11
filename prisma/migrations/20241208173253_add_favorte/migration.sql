/*
  Warnings:

  - You are about to drop the column `categorieID` on the `foods` table. All the data in the column will be lost.
  - You are about to drop the column `typeID` on the `foods` table. All the data in the column will be lost.
  - You are about to drop the column `favorites` on the `user` table. All the data in the column will be lost.
  - Added the required column `categorieId` to the `Foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `favoriteId` to the `Foods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Foods` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `foods` DROP FOREIGN KEY `Foods_categorieID_fkey`;

-- DropForeignKey
ALTER TABLE `foods` DROP FOREIGN KEY `Foods_typeID_fkey`;

-- AlterTable
ALTER TABLE `foods` DROP COLUMN `categorieID`,
    DROP COLUMN `typeID`,
    ADD COLUMN `categorieId` INTEGER NOT NULL,
    ADD COLUMN `favoriteId` INTEGER NOT NULL,
    ADD COLUMN `typeId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `favorites`;

-- CreateTable
CREATE TABLE `Favorite` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Favorite_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Foods` ADD CONSTRAINT `Foods_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `TypeFood`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Foods` ADD CONSTRAINT `Foods_categorieId_fkey` FOREIGN KEY (`categorieId`) REFERENCES `CategorieFood`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Foods` ADD CONSTRAINT `Foods_favoriteId_fkey` FOREIGN KEY (`favoriteId`) REFERENCES `Favorite`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
