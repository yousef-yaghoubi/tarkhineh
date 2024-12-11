/*
  Warnings:

  - You are about to drop the column `orderTrack` on the `user` table. All the data in the column will be lost.
  - Added the required column `userId` to the `OrderTracking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ordertracking` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `orderTrack`;

-- AddForeignKey
ALTER TABLE `OrderTracking` ADD CONSTRAINT `OrderTracking_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
