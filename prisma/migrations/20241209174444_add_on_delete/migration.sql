-- DropForeignKey
ALTER TABLE `commentsfood` DROP FOREIGN KEY `CommentsFood_foodId_fkey`;

-- DropForeignKey
ALTER TABLE `commentsfood` DROP FOREIGN KEY `CommentsFood_userId_fkey`;

-- AddForeignKey
ALTER TABLE `CommentsFood` ADD CONSTRAINT `CommentsFood_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CommentsFood` ADD CONSTRAINT `CommentsFood_foodId_fkey` FOREIGN KEY (`foodId`) REFERENCES `Foods`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
