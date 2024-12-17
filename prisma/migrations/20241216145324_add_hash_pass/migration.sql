/*
  Warnings:

  - Added the required column `hashPass` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_phone_key` ON `user`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `hashPass` VARCHAR(191) NOT NULL;
