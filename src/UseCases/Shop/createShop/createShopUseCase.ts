import { client } from "../../../prisma/client";
import { CreateShopItemUseCase } from "../../ShopItem/createShopItem/createShopItemUseCase";

interface IShopItem {
    itemId: string;
    shopId: string;
    quantity: number;
}


interface ICreateShopRequest {
    clientId: string;
    shopItemsReq: IShopItem[];
}

class CreateShopUseCase {
    async execute({ clientId, shopItemsReq }: ICreateShopRequest) {
            const createShopItemUseCase = new CreateShopItemUseCase();

        console.log("SHOPITENS PRIMEIRA: " + shopItemsReq + '\N\N')

            try {
                const shop = await client.shop.create({
                    data: {
                        clientId,
                        created_at: new Date(),
                    }
                });
    
                shopItemsReq.map(item => {
                    item.shopId = shop.id;
                })
    
                console.log("SHOPITENS SEGUNDA: " + shopItemsReq + '\N\N')

                await createShopItemUseCase.execute({ items: shopItemsReq });
                
                const shopItems = await client.shopItem.findMany({
                    where: {
                        shopId: shop.id,
                    }
                });
        
                if(!shop) {
                    throw new Error('Não foi possível criar a compra');
                }
    
                const shopWItems = {
                    ...shop,
                    ...shopItems
                }
        
                return shopWItems;
            } catch(error) {
                console.log(error)
            }   
        }  
}

export { CreateShopUseCase }