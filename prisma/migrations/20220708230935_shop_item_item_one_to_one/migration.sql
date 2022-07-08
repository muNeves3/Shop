/*
  Warnings:

  - Added the required column `itemId` to the `shop_item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_shopItemId_fkey";

-- AlterTable
ALTER TABLE "shop_item" ADD COLUMN     "itemId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "shop_item" ADD CONSTRAINT "shop_item_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
