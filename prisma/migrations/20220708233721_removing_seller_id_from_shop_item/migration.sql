/*
  Warnings:

  - You are about to drop the column `sellerId` on the `shop_item` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "shop_item" DROP CONSTRAINT "shop_item_sellerId_fkey";

-- AlterTable
ALTER TABLE "shop_item" DROP COLUMN "sellerId";
