/*
  Warnings:

  - You are about to drop the column `shopId` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `shop` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_shopId_fkey";

-- DropForeignKey
ALTER TABLE "shop" DROP CONSTRAINT "shop_clientId_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "shopId",
ADD COLUMN     "shopItemId" TEXT;

-- AlterTable
ALTER TABLE "shop" DROP COLUMN "clientId";

-- CreateTable
CREATE TABLE "shop_item" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "shopId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "sellerId" TEXT NOT NULL,

    CONSTRAINT "shop_item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_shopItemId_fkey" FOREIGN KEY ("shopItemId") REFERENCES "shop_item"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_item" ADD CONSTRAINT "shop_item_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_item" ADD CONSTRAINT "shop_item_sellerId_fkey" FOREIGN KEY ("sellerId") REFERENCES "seller"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "shop_item" ADD CONSTRAINT "shop_item_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
