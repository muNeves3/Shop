/*
  Warnings:

  - You are about to drop the column `clientId` on the `shop_item` table. All the data in the column will be lost.
  - Added the required column `clientId` to the `shop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "shop_item" DROP CONSTRAINT "shop_item_clientId_fkey";

-- AlterTable
ALTER TABLE "shop" ADD COLUMN     "clientId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "shop_item" DROP COLUMN "clientId";

-- AddForeignKey
ALTER TABLE "shop" ADD CONSTRAINT "shop_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
