import { Item, Seller } from "@prisma/client";
import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";
import RedisCachProvider from "../../../shared/providers/CacheProvider/RedisCachProvider";

interface ISellerRequest {
    id: string;
}

class GetSellerItemsUseCase {
    async execute({ id }:ISellerRequest)  {
        const cacheProvider = new RedisCachProvider();
        const sellerCacheKey = `seller:${id}`;
        const sellerItemCacheKey = `seller-item:${id}`;
        
        let sellerExists = await cacheProvider.recover<Seller>(
            sellerCacheKey,
        );

        if(!sellerExists) {
            sellerExists = await client.seller.findFirst({
                where: {
                    id
                }
            });

            if(!sellerExists) {
                throw new AppError("This seller does not exists");
            }
        }

        let sellerItems = await cacheProvider.recover<Item[]>(
            sellerItemCacheKey
        );

        if(!sellerItems) {
            sellerItems = await client.item.findMany({
                where: {
                    sellerId: id
                }
            });

            await cacheProvider.save(sellerItemCacheKey, sellerItems);
        }

        return sellerItems;
    }
}

export { GetSellerItemsUseCase }