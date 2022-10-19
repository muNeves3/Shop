"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopItemUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
class CreateShopItemUseCase {
    async execute({ items }) {
        if (items.length < 1) {
            throw new AppError_1.default('Adicione pelo menos um item');
        }
        else {
            let shopItems = [];
            items.map(item => {
                shopItems.push({
                    itemId: item.itemId,
                    shopId: item.shopId,
                    quantity: item.quantity <= 0 ? 1 : item.quantity,
                    created_at: new Date(),
                });
            });
            const createdItems = await client_1.client.shopItem.createMany({
                data: shopItems
            });
            return createdItems;
        }
    }
}
exports.CreateShopItemUseCase = CreateShopItemUseCase;
//# sourceMappingURL=createShopItemUseCase.js.map