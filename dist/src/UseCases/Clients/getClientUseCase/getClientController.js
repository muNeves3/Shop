"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientController = void 0;
const getClientUseCase_1 = require("./getClientUseCase");
class GetClientController {
    async handle(request, response) {
        const { id } = request.params;
        const getClientUseCase = new getClientUseCase_1.GetClientUseCase();
        try {
            const client = await getClientUseCase.execute({ id });
            return response.json({ 'client': client });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.GetClientController = GetClientController;
//# sourceMappingURL=getClientController.js.map