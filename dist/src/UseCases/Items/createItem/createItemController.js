"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateItemController = void 0;
const createItemUseCase_1 = require("./createItemUseCase");
class CreateItemController {
    async handle(request, response) {
        const { name, description, price, sellerId } = request.body;
        const createItemUseCase = new createItemUseCase_1.CreateItemUseCase();
        try {
            const item = await createItemUseCase.execute({ description, name, price, sellerId });
            return response.json({ 'item': item });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.CreateItemController = CreateItemController;
//# sourceMappingURL=createItemController.js.map