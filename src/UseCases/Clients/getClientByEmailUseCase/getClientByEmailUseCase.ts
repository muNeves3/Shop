import { Client } from "@prisma/client";
import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";
import RedisCachProvider from "../../../shared/providers/CacheProvider/RedisCachProvider";

interface IClientRequest {
    email: string;
}

class GetClientByEmailUseCase {
    async execute({ email }:IClientRequest) {
        const cacheProvider = new RedisCachProvider();
        const cacheKey = `clients:${email}`;
        
        let clientByEmail = await cacheProvider.recover<Client>(
            cacheKey,
        );

        console.log(clientByEmail)

        if(!clientByEmail) {
            clientByEmail = await client.client.findFirst({
                where: {
                    email
                }
            });

            await cacheProvider.save(cacheKey, clientByEmail);
        }

        if(!clientByEmail) {
            throw new AppError("This client does not exists");
        }
        
        return clientByEmail;
    }
}

export { GetClientByEmailUseCase }