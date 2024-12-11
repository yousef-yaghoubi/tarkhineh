/*
  Warnings:

  - You are about to drop the column `categorie` on the `foods` table. All the data in the column will be lost.
  - You are about to drop the column `comments` on the `foods` table. All the data in the column will be lost.
  - Added the required column `categorieID` to the `Foods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `foods` DROP COLUMN `categorie`,
    DROP COLUMN `comments`,
    ADD COLUMN `categorieID` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `CategorieFood` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommentsFood` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `desc` VARCHAR(191) NOT NULL,
    `score` DOUBLE NOT NULL,
    `userId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `public` BOOLEAN NULL DEFAULT false,
    `foodId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Foods` ADD CONSTRAINT `Foods_categorieID_fkey` FOREIGN KEY (`categorieID`) REFERENCES `CategorieFood`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommentsFood` ADD CONSTRAINT `CommentsFood_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommentsFood` ADD CONSTRAINT `CommentsFood_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
