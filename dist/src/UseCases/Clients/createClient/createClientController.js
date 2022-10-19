"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientController = void 0;
const createClientUseCase_1 = require("./createClientUseCase");
class CreateClientController {
    async handle(request, response) {
        const { email, name, password } = request.body;
        const createClientUseCase = new createClientUseCase_1.CreateClientUseCase();
        try {
            const client = await createClientUseCase.execute({
                email,
                name,
                password
            });
            return response.json({ 'client': client });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.CreateClientController = CreateClientController;
//# sourceMappingURL=createClientController.js.map