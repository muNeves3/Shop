"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteSellerController = void 0;
const deleteSellerUseCase_1 = require("./deleteSellerUseCase");
class DeleteSellerController {
    async handle(request, response) {
        const { id } = request.params;
        const deleteSellerUseCase = new deleteSellerUseCase_1.DeleteSellerUseCase();
        try {
            deleteSellerUseCase.execute({ id });
            return response.json({ 'message': 'Seller deleted succesfully' });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.DeleteSellerController = DeleteSellerController;
//# sourceMappingURL=delteSellerController.js.map