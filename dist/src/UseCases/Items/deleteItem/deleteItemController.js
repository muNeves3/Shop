"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteItemController = void 0;
const deleteItemUseCase_1 = require("./deleteItemUseCase");
class DeleteItemController {
    async handle(request, response) {
        const { id } = request.params;
        const deleteItemUseCase = new deleteItemUseCase_1.DeleteItemUseCase();
        try {
            await deleteItemUseCase.execute({ id });
            return response.json({ 'message': 'Item deleted succesfully' });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.DeleteItemController = DeleteItemController;
//# sourceMappingURL=deleteItemController.js.map