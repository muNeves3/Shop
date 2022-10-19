"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClientUseCase = void 0;
const client_1 = require("../../../prisma/client");
const RedisCachProvider_1 = require("../../../shared/providers/CacheProvider/RedisCachProvider");
class ListClientUseCase {
    async execute() {
        const cacheProvider = new RedisCachProvider_1.default();
        const cacheKey = `clients`;
        let users = await cacheProvider.recover(cacheKey);
        if (!users) {
            users = await client_1.client.client.findMany();
            await cacheProvider.save(cacheKey, users);
        }
        return users;
    }
}
exports.ListClientUseCase = ListClientUseCase;
//# sourceMappingURL=listClientUseCase.js.map