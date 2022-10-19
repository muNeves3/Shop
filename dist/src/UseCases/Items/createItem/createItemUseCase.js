"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
class CreateItemUseCase {
    async execute({ name, price, description, sellerId }) {
        const sellerExists = await client_1.client.seller.findFirst({
            where: {
                id: sellerId
            }
        });
        if (!sellerExists) {
            throw new AppError_1.default("This seller does not exists");
        }
        const itemAlreadyInSeller = await client_1.client.item.findFirst({
            where: {
                sellerId,
                AND: {
                    name
                }
            }
        });
        if (itemAlreadyInSeller) {
            throw new AppError_1.default("This item is already selled by this seller");
        }
        const newItem = await client_1.client.item.create({
            data: {
                name,
                price,
                description,
                created_at: new Date(),
                sellerId,
            }
        });
        return Object.assign(Object.assign({}, newItem), { sellerExists });
    }
}
exports.CreateItemUseCase = CreateItemUseCase;
//# sourceMappingURL=createItemUseCase.js.map