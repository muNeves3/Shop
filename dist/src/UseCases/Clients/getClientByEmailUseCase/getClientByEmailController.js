"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetClientByEmailController = void 0;
const getClientByEmailUseCase_1 = require("./getClientByEmailUseCase");
class GetClientByEmailController {
    async handle(request, response) {
        const query = request.query;
        const email = '';
        console.log(query);
        const getClientByEmailUseCase = new getClientByEmailUseCase_1.GetClientByEmailUseCase();
        try {
            const client = await getClientByEmailUseCase.execute({ email });
            return response.json({ 'client': client });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.GetClientByEmailController = GetClientByEmailController;
//# sourceMappingURL=getClientByEmailController.js.map