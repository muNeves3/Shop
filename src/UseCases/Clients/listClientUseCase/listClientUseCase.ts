import { Client } from ".prisma/client";
import { client } from "../../../prisma/client";
import { ClassTransformer } from 'class-transformer';
import RedisCachProvider from "../../../shared/providers/CacheProvider/RedisCachProvider";

class ListClientUseCase {
    async execute() {
        const cacheProvider = new RedisCachProvider();
        const cacheKey = `clients`;
        
        let users = await cacheProvider.recover<Client[]>(
            cacheKey,
        );

        if(!users) {
            users = await client.client.findMany();
            await cacheProvider.save(cacheKey, users);
        }

        return users;
    }
}

export { ListClientUseCase }