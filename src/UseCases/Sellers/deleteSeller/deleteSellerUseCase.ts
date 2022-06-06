import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface ISellerRequest {
    id: string;
}

class DeleteSellerUseCase {
    async execute({ id }: ISellerRequest) {
        const sellerExists = await client.seller.findFirst({
            where: {
                id
            }
        });

        if(!sellerExists) {
            throw new AppError("This seller does not exists");
        }

        await client.seller.delete({
            where: {
                id
            }
        });
    }
}

export { DeleteSellerUseCase }