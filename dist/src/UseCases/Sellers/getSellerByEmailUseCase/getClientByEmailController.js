"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSellerByEmailController = void 0;
const getSellerByEmailUseCase_1 = require("./getSellerByEmailUseCase");
class GetSellerByEmailController {
    async handle(request, response) {
        const query = request.query;
        const email = '';
        console.log(query);
        const getSellerByEmailUseCase = new getSellerByEmailUseCase_1.GetSellerByEmailUseCase();
        try {
            const seller = await getSellerByEmailUseCase.execute({ email });
            return response.json({ 'seller': seller });
        }
        catch (error) {
            return response.json({ 'error': error });
        }
    }
}
exports.GetSellerByEmailController = GetSellerByEmailController;
//# sourceMappingURL=getClientByEmailController.js.map