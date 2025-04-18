-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
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

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Foods" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "rating" REAL NOT NULL DEFAULT 0,
    "typeId" TEXT NOT NULL,
    "categorieId" TEXT NOT NULL,
    "favoriteId" TEXT,
    "branchId" TEXT NOT NULL,
    "specialOffer" BOOLEAN NOT NULL DEFAULT false,
    "numberOfSell" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Foods_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "TypeFood" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Foods_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "CategorieFood" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Foods_favoriteId_fkey" FOREIGN KEY ("favoriteId") REFERENCES "Favorite" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Foods_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branchs" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Addresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "titleAddress" TEXT NOT NULL,
    "meReciver" BOOLEAN,
    "phone" TEXT NOT NULL,
    "nameReciver" TEXT,
    "address" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TypeFood" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CategorieFood" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "CommentsFood" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "desc" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "public" BOOLEAN DEFAULT false,
    "foodId" TEXT NOT NULL,
    CONSTRAINT "CommentsFood_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CommentsFood_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CommentsBranch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "desc" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "userId" TEXT NOT NULL,
    "branchId" TEXT,
    "public" BOOLEAN DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "CommentsBranch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CommentsBranch_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branchs" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Branchs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "nickName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phones" TEXT NOT NULL,
    "images" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "OrderTracking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "branchId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sendMethodId" TEXT NOT NULL,
    "statusId" TEXT NOT NULL,
    "paymentMethodId" TEXT NOT NULL,
    CONSTRAINT "OrderTracking_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderTracking_sendMethodId_fkey" FOREIGN KEY ("sendMethodId") REFERENCES "SendMethod" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderTracking_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "StatusOfOrderTracking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderTracking_paymentMethodId_fkey" FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SendMethod" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "StatusOfOrderTracking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "FoodOfOrderTracking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "foodId" TEXT NOT NULL,
    "orderTrackId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "FoodOfOrderTracking_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Foods" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FoodOfOrderTracking_orderTrackId_fkey" FOREIGN KEY ("orderTrackId") REFERENCES "OrderTracking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_key" ON "Favorite"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "TypeFood_name_key" ON "TypeFood"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Branchs_name_key" ON "Branchs"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Branchs_nickName_key" ON "Branchs"("nickName");
