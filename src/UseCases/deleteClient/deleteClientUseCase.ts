import { response } from "express";
import { client } from "../../prisma/client"
import AppError from "../../shared/AppError";

interface IClientRequest {
    id: string
}

class DeleteClientUseCase {
    async execute({ id }: IClientRequest) {
        const clientExists = await client.client.findFirst({
            where: {
                id
            }
        });

        if(!clientExists) {
            throw new AppError('This client does not exists');
        }

        await client.client.delete({
            where: {
                id: clientExists.id
            }
        });
    }
}

export { DeleteClientUseCase }