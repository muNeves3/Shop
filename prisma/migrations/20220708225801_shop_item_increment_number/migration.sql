-- AlterTable
CREATE SEQUENCE "shop_item_number_seq";
ALTER TABLE "shop_item" ALTER COLUMN "number" SET DEFAULT nextval('shop_item_number_seq');
ALTER SEQUENCE "shop_item_number_seq" OWNED BY "shop_item"."number";
