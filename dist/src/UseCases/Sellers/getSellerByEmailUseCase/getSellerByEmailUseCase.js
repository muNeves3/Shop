"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSellerByEmailUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
class GetSellerByEmailUseCase {
    async execute({ email }) {
        const seller = await client_1.client.seller.findFirst({
            where: {
                email
            }
        });
        if (!seller) {
            throw new AppError_1.default("This seller does not exists");
        }
        return seller;
    }
}
exports.GetSellerByEmailUseCase = GetSellerByEmailUseCase;
//# sourceMappingURL=getSellerByEmailUseCase.js.map