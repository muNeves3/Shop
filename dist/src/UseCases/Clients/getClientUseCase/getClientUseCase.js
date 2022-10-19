"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
class GetClientUseCase {
    async execute({ id }) {
        const client = await client_1.client.client.findFirst({
            where: {
                id
            }
        });
        if (!client) {
            throw new AppError_1.default("This client does not exists");
        }
        return client;
    }
}
exports.GetClientUseCase = GetClientUseCase;
//# sourceMappingURL=getClientUseCase.js.map