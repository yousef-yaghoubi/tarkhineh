/*
  Warnings:

  - You are about to drop the column `commments` on the `branchs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `branchs` DROP COLUMN `commments`;

-- AlterTable
ALTER TABLE `commentsbranch` MODIFY `branchId` INTEGER NULL;

-- CreateTable
CREATE TABLE `OrderTracking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `branchId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sendMethodId` INTEGER NOT NULL,
    `statusId` INTEGER NOT NULL,
    `paymentMethodId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SendMethod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatusOfOrderTracking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PaymentMethod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FoodOfOrderTracking` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foodId` INTEGER NOT NULL,
    `orderTrackId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrderTracking` ADD CONSTRAINT `OrderTracking_sendMethodId_fkey` FOREIGN KEY (`sendMethodId`) REFERENCES `SendMethod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderTracking` ADD CONSTRAINT `OrderTracking_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `StatusOfOrderTracking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OrderTracking` ADD CONSTRAINT `OrderTracking_paymentMethodId_fkey` FOREIGN KEY (`paymentMethodId`) REFERENCES `PaymentMethod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodOfOrderTracking` ADD CONSTRAINT `FoodOfOrderTracking_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FoodOfOrderTracking` ADD CONSTRAINT `FoodOfOrderTracking_orderTrackId_fkey` FOREIGN KEY (`orderTrackId`) REFERENCES `OrderTracking`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
