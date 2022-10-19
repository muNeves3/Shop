"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetItemUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
const RedisCachProvider_1 = require("../../../shared/providers/CacheProvider/RedisCachProvider");
class GetItemUseCase {
    async execute({ id }) {
        const cacheProvider = new RedisCachProvider_1.default();
        const cachekey = `items:${id}`;
        let itemExists = await cacheProvider.recover(cachekey);
        if (!itemExists) {
            itemExists = await client_1.client.item.findFirst({
                where: {
                    id
                }
            });
            if (!itemExists)
                throw new AppError_1.default("This item does not exists");
        }
        return itemExists;
    }
}
exports.GetItemUseCase = GetItemUseCase;
//# sourceMappingURL=getItemUseCase.js.map