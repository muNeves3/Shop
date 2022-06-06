import { hash } from "bcryptjs";
import { client } from "../../../prisma/client";
import AppError from "../../../shared/AppError";

interface ISellerRequest {
    name: string;
    email: string;
    password: string;
}

class CreateSellerUseCase {
    async execute({ email, name, password }: ISellerRequest) {
        const sellerAlreadyExists = await client.seller.findFirst({
            where: {
                email
            }
        });

        if(sellerAlreadyExists) {
            throw new AppError("Email already registered");
        }

        const hashedPassword = await hash(password, 8);

        const newSeller = await client.seller.create({
            data: {
                email,
                password: hashedPassword,
                name,
                created_at: new Date()
            }
        });

        return newSeller;
    }
}

export { CreateSellerUseCase }