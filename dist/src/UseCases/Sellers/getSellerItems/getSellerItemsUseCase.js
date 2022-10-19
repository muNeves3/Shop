"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSellerItemsUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
const RedisCachProvider_1 = require("../../../shared/providers/CacheProvider/RedisCachProvider");
class GetSellerItemsUseCase {
    async execute({ id }) {
        const cacheProvider = new RedisCachProvider_1.default();
        const sellerCacheKey = `seller:${id}`;
        const sellerItemCacheKey = `seller-item:${id}`;
        let sellerExists = await cacheProvider.recover(sellerCacheKey);
        if (!sellerExists) {
            sellerExists = await client_1.client.seller.findFirst({
                where: {
                    id
                }
            });
            if (!sellerExists) {
                throw new AppError_1.default("This seller does not exists");
            }
        }
        let sellerItems = await cacheProvider.recover(sellerItemCacheKey);
        if (!sellerItems) {
            sellerItems = await client_1.client.item.findMany({
                where: {
                    sellerId: id
                }
            });
            await cacheProvider.save(sellerItemCacheKey, sellerItems);
        }
        return sellerItems;
    }
}
exports.GetSellerItemsUseCase = GetSellerItemsUseCase;
//# sourceMappingURL=getSellerItemsUseCase.js.map