"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemsController = void 0;
const listClientUseCase_1 = require("../../Clients/listClientUseCase/listClientUseCase");
class ListItemsController {
    async handle(request, response) {
        const listItemsUseCase = new listClientUseCase_1.ListClientUseCase();
        try {
            const items = await listItemsUseCase.execute();
            return response.json({ 'items': items });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.ListItemsController = ListItemsController;
//# sourceMappingURL=listItemsController.js.map