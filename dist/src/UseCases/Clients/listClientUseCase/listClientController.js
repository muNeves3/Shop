"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClientController = void 0;
const getClientByEmailUseCase_1 = require("../getClientByEmailUseCase/getClientByEmailUseCase");
const listClientUseCase_1 = require("./listClientUseCase");
class ListClientController {
    async handle(request, response) {
        const { email } = request.query;
        const listClientUseCase = new listClientUseCase_1.ListClientUseCase();
        try {
            if (email !== null && typeof email === 'string') {
                const getClientByEmailUseCase = new getClientByEmailUseCase_1.GetClientByEmailUseCase();
                const client = await getClientByEmailUseCase.execute({ email });
                return response.json({ 'client': client });
            }
            else {
                const clients = await listClientUseCase.execute();
                return response.json({ 'clients': clients });
            }
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.ListClientController = ListClientController;
//# sourceMappingURL=listClientController.js.map