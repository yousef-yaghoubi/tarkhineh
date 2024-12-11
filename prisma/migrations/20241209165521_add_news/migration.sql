-- DropForeignKey
ALTER TABLE `foods` DROP FOREIGN KEY `Foods_favoriteId_fkey`;

-- AddForeignKey
ALTER TABLE `Foods` ADD CONSTRAINT `Foods_favoriteId_fkey` FOREIGN KEY (`favoriteId`) REFERENCES `Favorite`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
