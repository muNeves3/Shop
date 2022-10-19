"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemsUseCase = void 0;
const client_1 = require("../../../prisma/client");
const RedisCachProvider_1 = require("../../../shared/providers/CacheProvider/RedisCachProvider");
class ListItemsUseCase {
    async execute() {
        const cacheProvider = new RedisCachProvider_1.default();
        const cachekey = `items`;
        let items = await cacheProvider.recover(cachekey);
        if (!items) {
            items = await client_1.client.item.findMany();
            await cacheProvider.save(cachekey, items);
        }
        return items;
    }
}
exports.ListItemsUseCase = ListItemsUseCase;
//# sourceMappingURL=listItemsUseCase.js.map