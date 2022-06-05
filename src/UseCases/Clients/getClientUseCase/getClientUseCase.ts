import { client as prismaClient } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface IClientRequest {
    id: string;
}

class GetClientUseCase {
    async execute({ id }:IClientRequest) {
        const client = await prismaClient.client.findFirst({
            where: {
                id
            }
        });

        if(!client) {
            throw new AppError("This client does not exists");
        }
        
        return client;
    }
}

export { GetClientUseCase }