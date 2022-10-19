"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopItemController = void 0;
const createShopItemUseCase_1 = require("./createShopItemUseCase");
class CreateShopItemController {
    async handle(request, response) {
        const { items } = request.body;
        const createShopItemUseCase = new createShopItemUseCase_1.CreateShopItemUseCase();
        try {
            const createdItems = await createShopItemUseCase.execute({ items });
            return response.json({ 'items': createdItems });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.CreateShopItemController = CreateShopItemController;
//# sourceMappingURL=createShopItemController.js.map