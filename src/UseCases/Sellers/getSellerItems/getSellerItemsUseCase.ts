import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface ISellerRequest {
    id: string;
}

class GetSellerItemsUseCase {
    async execute({ id }:ISellerRequest)  {
        const sellerExists = await client.seller.findFirst({
            where: {
                id
            }
        });

        if(!sellerExists) {
            throw new AppError("This seller does not exists");
        }

        const sellerItems = await client.item.findMany({
            where: {
                sellerId: sellerExists.id
            }
        });

        return sellerItems;
    }
}

export { GetSellerItemsUseCase }