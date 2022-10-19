"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteItemUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
class DeleteItemUseCase {
    async execute({ id }) {
        const item = await client_1.client.item.findFirst({
            where: {
                id
            }
        });
        if (!item) {
            throw new AppError_1.default("This item does not exists");
        }
        await client_1.client.item.delete({
            where: {
                id: item.id
            }
        });
    }
}
exports.DeleteItemUseCase = DeleteItemUseCase;
//# sourceMappingURL=deleteItemUseCase.js.map