"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopController = void 0;
const createShopUseCase_1 = require("./createShopUseCase");
class CreateShopController {
    async handle(request, response) {
        const { shop } = request.body;
        const createShopUseCase = new createShopUseCase_1.CreateShopUseCase();
        try {
            const [clientId, shopItemsReq] = [shop.clientId, shop.shopItemsReq];
            const createdShop = await createShopUseCase.execute({ clientId, shopItemsReq });
            return response.json({ 'shop': createdShop });
        }
        catch (error) {
            console.log(error);
            return response.json({ 'error': error });
        }
    }
}
exports.CreateShopController = CreateShopController;
//# sourceMappingURL=createShopController.js.map