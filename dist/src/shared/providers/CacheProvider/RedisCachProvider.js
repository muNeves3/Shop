"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
const cacheconfig_1 = require("../../../configs/cacheconfig");
class RedisCachProvider {
    constructor() {
        this.client = new ioredis_1.default(cacheconfig_1.default.config.redis);
    }
    async save(key, value) {
        await this.client.set(key, JSON.stringify(value));
    }
    async invalidate(key) {
        await this.client.del(key);
    }
    async recover(key) {
        const data = await this.client.get(key);
        if (!data) {
            return null;
        }
        const parsedData = JSON.parse(data);
        return parsedData;
    }
    async invalidatePrefix(prefix) {
        const keys = await this.client.keys(`${prefix}:*`);
        const pipeline = await this.client.pipeline();
        keys.forEach(key => {
            pipeline.del(key);
        });
        await pipeline.exec();
    }
}
exports.default = RedisCachProvider;
//# sourceMappingURL=RedisCachProvider.js.map