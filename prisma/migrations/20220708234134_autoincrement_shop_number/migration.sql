-- AlterTable
CREATE SEQUENCE "shop_number_seq";
ALTER TABLE "shop" ALTER COLUMN "number" SET DEFAULT nextval('shop_number_seq');
ALTER SEQUENCE "shop_number_seq" OWNED BY "shop"."number";
