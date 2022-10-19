import { Prisma } from ".prisma/client";
interface ShopItem {
    itemId: string;
    shopId: string;
    quantity: number;
}
interface ICreateShopItemRequest {
    items: ShopItem[];
}
declare class CreateShopItemUseCase {
    execute({ items }: ICreateShopItemRequest): Promise<Prisma.BatchPayload>;
}
export { CreateShopItemUseCase };
