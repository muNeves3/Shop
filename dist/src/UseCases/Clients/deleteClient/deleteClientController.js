"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClientController = void 0;
const deleteClientUseCase_1 = require("./deleteClientUseCase");
class DeleteClientController {
    async handle(request, response) {
        const { id } = request.params;
        const deleteClientUseCase = new deleteClientUseCase_1.DeleteClientUseCase();
        try {
            await deleteClientUseCase.execute({ id });
            return response.json({ 'client': 'client deleted with success' });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.DeleteClientController = DeleteClientController;
//# sourceMappingURL=deleteClientController.js.map