"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSellerUseCase = void 0;
const bcryptjs_1 = require("bcryptjs");
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
class CreateSellerUseCase {
    async execute({ email, name, password }) {
        const sellerAlreadyExists = await client_1.client.seller.findFirst({
            where: {
                email
            }
        });
        if (sellerAlreadyExists) {
            throw new AppError_1.default("Email already registered");
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 8);
        const newSeller = await client_1.client.seller.create({
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
exports.CreateSellerUseCase = CreateSellerUseCase;
//# sourceMappingURL=createSellerUseCase.js.map