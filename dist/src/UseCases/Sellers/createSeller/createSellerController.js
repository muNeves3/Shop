"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSellerController = void 0;
const createSellerUseCase_1 = require("./createSellerUseCase");
class CreateSellerController {
    async handle(request, response) {
        const { name, email, password } = request.body;
        const createSellerUseCase = new createSellerUseCase_1.CreateSellerUseCase();
        try {
            const seller = await createSellerUseCase.execute({ name, email, password });
            return response.json({ 'seller': seller });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.CreateSellerController = CreateSellerController;
//# sourceMappingURL=createSellerController.js.map