/*
  Warnings:

  - Added the required column `branchId` to the `Foods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `foods` ADD COLUMN `branchId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `CommentsBranch` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `desc` VARCHAR(255) NOT NULL,
    `score` DOUBLE NOT NULL,
    `userId` INTEGER NOT NULL,
    `branchId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Branchs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NOT NULL,
    `phones` JSON NOT NULL,
    `openDuration` VARCHAR(191) NOT NULL,
    `images` JSON NOT NULL,
    `commments` INTEGER NOT NULL,

    UNIQUE INDEX `Branchs_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Foods` ADD CONSTRAINT `Foods_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `Branchs`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommentsBranch` ADD CONSTRAINT `CommentsBranch_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommentsBranch` ADD CONSTRAINT `CommentsBranch_branchId_fkey` FOREIGN KEY (`branchId`) REFERENCES `Branchs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
