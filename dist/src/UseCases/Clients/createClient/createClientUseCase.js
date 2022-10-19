"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientUseCase = void 0;
const client_1 = require("../../../prisma/client");
const bcryptjs_1 = require("bcryptjs");
const AppError_1 = require("../../../shared/AppError");
class CreateClientUseCase {
    async execute({ email, name, password }) {
        const clientAlreadyExists = await client_1.client.client.findFirst({
            where: {
                email
            }
        });
        if (clientAlreadyExists) {
            throw new AppError_1.default('Email already registered', 400);
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 8);
        const newClient = await client_1.client.client.create({
            data: {
                email,
                name,
                password: hashedPassword,
                created_at: new Date()
            }
        });
        return newClient;
    }
}
exports.CreateClientUseCase = CreateClientUseCase;
//# sourceMappingURL=createClientUseCase.js.map