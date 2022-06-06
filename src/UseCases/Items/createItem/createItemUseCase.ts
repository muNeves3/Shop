import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface IItemRequest {
    name: string;
    price: number;
    description: string;
    sellerId: string;
}

class CreateItemUseCase {
    async execute({ name, price, description, sellerId }: IItemRequest) {
        const sellerExists = await client.seller.findFirst({
            where: {
                id: sellerId
            }
        });


        if(!sellerExists) {
            throw new AppError("This seller does not exists");
        }

        const itemAlreadyInSeller = await client.item.findFirst({
            where: {
                sellerId,
                AND: {
                    name
                }
            }
        });

        if(itemAlreadyInSeller) {
            throw new AppError("This item is already selled by this seller");
        }

        const newItem = await client.item.create({
            data: {
                name,
                price,
                description,
                created_at: new Date(),
                sellerId,
            }
        });

        return {...newItem, sellerExists};
    }
}

export { CreateItemUseCase }