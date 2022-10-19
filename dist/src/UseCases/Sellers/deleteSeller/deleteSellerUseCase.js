"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSellerUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
class DeleteSellerUseCase {
    async execute({ id }) {
        const sellerExists = await client_1.client.seller.findFirst({
            where: {
                id
            }
        });
        if (!sellerExists) {
            throw new AppError_1.default("This seller does not exists");
        }
        await client_1.client.seller.delete({
            where: {
                id
            }
        });
    }
}
exports.DeleteSellerUseCase = DeleteSellerUseCase;
//# sourceMappingURL=deleteSellerUseCase.js.map