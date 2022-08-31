import { Item } from "@prisma/client";
import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";
import RedisCachProvider from "../../../shared/providers/CacheProvider/RedisCachProvider";

interface IItemRequest {
    id: string;
}

class GetItemUseCase {
    async execute({ id }: IItemRequest) {
        const cacheProvider = new RedisCachProvider();
        const cachekey = `items:${id}`;

        let itemExists = await cacheProvider.recover<Item>(
            cachekey
        );

        if(!itemExists) {
            itemExists = await client.item.findFirst({
                where: {
                    id
                }
            });
            
            if(!itemExists) 
                throw new AppError("This item does not exists");
        }

        return itemExists;
    }
}

export { GetItemUseCase }