import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface IItemRequest {
    name: string;
    price: number;
    description: string;
}

class CreateItemUseCase {
    async execute({ name, price, description }: IItemRequest) {
        const itemAlreadyExists = await client.item.findFirst({
            where: {
                name
            }
        });

        if(itemAlreadyExists) {
            throw new AppError("This item already exists");
        }

        const newItem = await client.item.create({
            data: {
                name,
                price,
                description
            }
        });

        return newItem;
    }
}

export { CreateItemUseCase }