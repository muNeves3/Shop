"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientByEmailUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
const RedisCachProvider_1 = require("../../../shared/providers/CacheProvider/RedisCachProvider");
class GetClientByEmailUseCase {
    async execute({ email }) {
        const cacheProvider = new RedisCachProvider_1.default();
        const cacheKey = `clients:${email}`;
        let clientByEmail = await cacheProvider.recover(cacheKey);
        console.log(clientByEmail);
        if (!clientByEmail) {
            clientByEmail = await client_1.client.client.findFirst({
                where: {
                    email
                }
            });
            await cacheProvider.save(cacheKey, clientByEmail);
        }
        if (!clientByEmail) {
            throw new AppError_1.default("This client does not exists");
        }
        return clientByEmail;
    }
}
exports.GetClientByEmailUseCase = GetClientByEmailUseCase;
//# sourceMappingURL=getClientByEmailUseCase.js.map