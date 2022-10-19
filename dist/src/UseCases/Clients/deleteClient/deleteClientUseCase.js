"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClientUseCase = void 0;
const client_1 = require("../../../prisma/client");
const AppError_1 = require("../../../shared/AppError");
class DeleteClientUseCase {
    async execute({ id }) {
        const clientExists = await client_1.client.client.findFirst({
            where: {
                id
            }
        });
        if (!clientExists) {
            throw new AppError_1.default('This client does not exists');
        }
        await client_1.client.client.delete({
            where: {
                id: clientExists.id
            }
        });
    }
}
exports.DeleteClientUseCase = DeleteClientUseCase;
//# sourceMappingURL=deleteClientUseCase.js.map