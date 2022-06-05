import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface IItemRequest {
    id: string;
}

class DeleteItemUseCase {
    async execute({ id }: IItemRequest) {
        const item = await client.item.findFirst({
            where: {
                id
            }
        });

        if(!item) {
            throw new AppError("This item does not exists");
        }

        await client.item.delete({
            where: {
                id: item.id
            }
        })
    }
}

export { DeleteItemUseCase }