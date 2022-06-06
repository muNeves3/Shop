import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface IItemRequest {
    id: string;
}

class GetItemUseCase {
    async execute({ id }: IItemRequest) {
        const itemExists = await client.item.findFirst({
            where: {
                id
            }
        });

        if(!itemExists) {
            throw new AppError("This item does not exists");
        }

        return itemExists;
    }
}

export { GetItemUseCase }