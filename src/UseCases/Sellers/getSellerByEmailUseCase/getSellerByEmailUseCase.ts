import { client as prismaClient } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface ISellerRequest {
    email: string;
}

class GetSellerByEmailUseCase {
    async execute({ email }:ISellerRequest) {
        const seller = await prismaClient.seller.findFirst({
            where: {
                email
            }
        });

        if(!seller) {
            throw new AppError("This seller does not exists");
        }
        
        return seller;
    }
}

export { GetSellerByEmailUseCase }