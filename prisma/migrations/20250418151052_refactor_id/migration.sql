/*
  Warnings:

  - The primary key for the `Addresses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Addresses` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `userId` on the `Addresses` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Branchs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Branchs` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `CategorieFood` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `CategorieFood` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `CommentsBranch` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `branchId` on the `CommentsBranch` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `CommentsBranch` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `userId` on the `CommentsBranch` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `CommentsFood` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `foodId` on the `CommentsFood` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `CommentsFood` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `userId` on the `CommentsFood` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Favorite` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `userId` on the `Favorite` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `FoodOfOrderTracking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `foodId` on the `FoodOfOrderTracking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `FoodOfOrderTracking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `orderTrackId` on the `FoodOfOrderTracking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `Foods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `branchId` on the `Foods` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `categorieId` on the `Foods` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `favoriteId` on the `Foods` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `id` on the `Foods` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `typeId` on the `Foods` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `OrderTracking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `OrderTracking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `paymentMethodId` on the `OrderTracking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `sendMethodId` on the `OrderTracking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `statusId` on the `OrderTracking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `userId` on the `OrderTracking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `PaymentMethod` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `PaymentMethod` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `SendMethod` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `SendMethod` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `StatusOfOrderTracking` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `StatusOfOrderTracking` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `TypeFood` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `TypeFood` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Addresses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titleAddress" TEXT NOT NULL,
    "meReciver" BOOLEAN,
    "phone" TEXT NOT NULL,
    "nameReciver" TEXT,
    "address" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Addresses" ("address", "id", "meReciver", "nameReciver", "phone", "titleAddress", "userId") SELECT "address", "id", "meReciver", "nameReciver", "phone", "titleAddress", "userId" FROM "Addresses";
DROP TABLE "Addresses";
ALTER TABLE "new_Addresses" RENAME TO "Addresses";
CREATE TABLE "new_Branchs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nickName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phones" TEXT NOT NULL,
    "images" TEXT NOT NULL
);
INSERT INTO "new_Branchs" ("address", "id", "images", "name", "nickName", "phones") SELECT "address", "id", "images", "name", "nickName", "phones" FROM "Branchs";
DROP TABLE "Branchs";
ALTER TABLE "new_Branchs" RENAME TO "Branchs";
CREATE UNIQUE INDEX "Branchs_name_key" ON "Branchs"("name");
CREATE UNIQUE INDEX "Branchs_nickName_key" ON "Branchs"("nickName");
CREATE TABLE "new_CategorieFood" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_CategorieFood" ("id", "name") SELECT "id", "name" FROM "CategorieFood";
DROP TABLE "CategorieFood";
ALTER TABLE "new_CategorieFood" RENAME TO "CategorieFood";
CREATE TABLE "new_CommentsBranch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "branchId" INTEGER,
    "public" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CommentsBranch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CommentsBranch_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branchs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_CommentsBranch" ("branchId", "createdAt", "desc", "id", "public", "score", "userId") SELECT "branchId", "createdAt", "desc", "id", "public", "score", "userId" FROM "CommentsBranch";
DROP TABLE "CommentsBranch";
ALTER TABLE "new_CommentsBranch" RENAME TO "CommentsBranch";
CREATE TABLE "new_CommentsFood" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "desc" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "public" BOOLEAN DEFAULT false,
    "foodId" INTEGER NOT NULL,
    CONSTRAINT "CommentsFood_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CommentsFood_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_CommentsFood" ("createdAt", "desc", "foodId", "id", "public", "score", "userId") SELECT "createdAt", "desc", "foodId", "id", "public", "score", "userId" FROM "CommentsFood";
DROP TABLE "CommentsFood";
ALTER TABLE "new_CommentsFood" RENAME TO "CommentsFood";
CREATE TABLE "new_Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Favorite" ("id", "userId") SELECT "id", "userId" FROM "Favorite";
DROP TABLE "Favorite";
ALTER TABLE "new_Favorite" RENAME TO "Favorite";
CREATE UNIQUE INDEX "Favorite_userId_key" ON "Favorite"("userId");
CREATE TABLE "new_FoodOfOrderTracking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "foodId" INTEGER NOT NULL,
    "orderTrackId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "FoodOfOrderTracking_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FoodOfOrderTracking_orderTrackId_fkey" FOREIGN KEY ("orderTrackId") REFERENCES "OrderTracking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FoodOfOrderTracking" ("foodId", "id", "orderTrackId", "quantity") SELECT "foodId", "id", "orderTrackId", "quantity" FROM "FoodOfOrderTracking";
DROP TABLE "FoodOfOrderTracking";
ALTER TABLE "new_FoodOfOrderTracking" RENAME TO "FoodOfOrderTracking";
CREATE TABLE "new_Foods" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "rating" REAL NOT NULL DEFAULT 0,
    "typeId" INTEGER NOT NULL,
    "categorieId" INTEGER NOT NULL,
    "favoriteId" INTEGER,
    "branchId" INTEGER NOT NULL,
    "specialOffer" BOOLEAN NOT NULL DEFAULT false,
    "numberOfSell" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Foods_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeFood" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Foods_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieFood" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Foods_favoriteId_fkey" FOREIGN KEY ("favoriteId") REFERENCES "Favorite" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Foods_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branchs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Foods" ("branchId", "categorieId", "desc", "favoriteId", "id", "image", "name", "numberOfSell", "order", "price", "rating", "specialOffer", "typeId") SELECT "branchId", "categorieId", "desc", "favoriteId", "id", "image", "name", "numberOfSell", "order", "price", "rating", "specialOffer", "typeId" FROM "Foods";
DROP TABLE "Foods";
ALTER TABLE "new_Foods" RENAME TO "Foods";
CREATE TABLE "new_OrderTracking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "branchId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sendMethodId" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,
    "paymentMethodId" INTEGER NOT NULL,
    CONSTRAINT "OrderTracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderTracking_sendMethodId_fkey" FOREIGN KEY ("sendMethodId") REFERENCES "SendMethod" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderTracking_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "StatusOfOrderTracking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderTracking_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderTracking" ("branchId", "date", "discount", "id", "paymentMethodId", "price", "sendMethodId", "statusId", "userId") SELECT "branchId", "date", "discount", "id", "paymentMethodId", "price", "sendMethodId", "statusId", "userId" FROM "OrderTracking";
DROP TABLE "OrderTracking";
ALTER TABLE "new_OrderTracking" RENAME TO "OrderTracking";
CREATE TABLE "new_PaymentMethod" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_PaymentMethod" ("id", "name") SELECT "id", "name" FROM "PaymentMethod";
DROP TABLE "PaymentMethod";
ALTER TABLE "new_PaymentMethod" RENAME TO "PaymentMethod";
CREATE TABLE "new_SendMethod" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_SendMethod" ("id", "name") SELECT "id", "name" FROM "SendMethod";
DROP TABLE "SendMethod";
ALTER TABLE "new_SendMethod" RENAME TO "SendMethod";
CREATE TABLE "new_StatusOfOrderTracking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_StatusOfOrderTracking" ("id", "name") SELECT "id", "name" FROM "StatusOfOrderTracking";
DROP TABLE "StatusOfOrderTracking";
ALTER TABLE "new_StatusOfOrderTracking" RENAME TO "StatusOfOrderTracking";
CREATE TABLE "new_TypeFood" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_TypeFood" ("id", "name") SELECT "id", "name" FROM "TypeFood";
DROP TABLE "TypeFood";
ALTER TABLE "new_TypeFood" RENAME TO "TypeFood";
CREATE UNIQUE INDEX "TypeFood_name_key" ON "TypeFood"("name");
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT,
    "lastName" TEXT,
    "nickName" TEXT,
    "profile" TEXT NOT NULL DEFAULT 'https://res.cloudinary.com/dajtfamck/image/upload/v1735917511/bygk2ftxmju3gxseehtl.jpg',
    "phone" TEXT,
    "hashPass" TEXT,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "birthDay" DATETIME
);
INSERT INTO "new_User" ("birthDay", "email", "firstName", "hashPass", "id", "lastName", "nickName", "phone", "profile", "role") SELECT "birthDay", "email", "firstName", "hashPass", "id", "lastName", "nickName", "phone", "profile", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
