import { client as prismaClient } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface IClientRequest {
    email: string;
}

class GetClientByEmailUseCase {
    async execute({ email }:IClientRequest) {
        const client = await prismaClient.client.findFirst({
            where: {
                email
            }
        });

        if(!client) {
            throw new AppError("This client does not exists");
        }
        
        return client;
    }
}

export { GetClientByEmailUseCase }