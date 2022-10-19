"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetItemController = void 0;
const getItemUseCase_1 = require("./getItemUseCase");
class GetItemController {
    async handle(request, response) {
        const { id } = request.params;
        const getItemUseCase = new getItemUseCase_1.GetItemUseCase();
        try {
            const item = await getItemUseCase.execute({ id });
            return response.json({ 'item': item });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.GetItemController = GetItemController;
//# sourceMappingURL=getItemController.js.map