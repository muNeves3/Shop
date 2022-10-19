"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSellerItemsController = void 0;
const getSellerItemsUseCase_1 = require("./getSellerItemsUseCase");
class GetSellerItemsController {
    async handle(request, response) {
        const { id } = request.params;
        const getSellerItemsUseCase = new getSellerItemsUseCase_1.GetSellerItemsUseCase();
        try {
            const items = await getSellerItemsUseCase.execute({ id });
            return response.json({ 'items': items });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.GetSellerItemsController = GetSellerItemsController;
//# sourceMappingURL=getSellerItemsController.js.map