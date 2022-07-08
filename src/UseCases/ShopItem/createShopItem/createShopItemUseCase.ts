import { Prisma } from ".prisma/client";
import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface ShopItem {
    itemId: string;
    shopId: string;
    quantity: number;
}

interface ICreateShopItemRequest {
    items: ShopItem[];   
}

class CreateShopItemUseCase {
    async execute({ items }: ICreateShopItemRequest) {

        if(items.length < 1) {
            throw new AppError('Adicione pelo menos um item');
        } else {
            let shopItems = <Prisma.ShopItemCreateManyInput[]>[];
            items.map(item => {
                shopItems.push({
                    itemId: item.itemId,
                    shopId: item.shopId,
                    quantity: item.quantity <= 0 ? 1 : item.quantity,
                    created_at: new Date(),
                })
            })
           
            const createdItems = await client.shopItem.createMany({
                data: shopItems
            });

            return createdItems;
        }

        
    }
}

export { CreateShopItemUseCase }