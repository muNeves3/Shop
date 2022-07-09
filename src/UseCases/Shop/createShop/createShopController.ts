import { Request, Response } from "express";
import { CreateShopUseCase } from "./createShopUseCase";

class CreateShopController {
    async handle(request: Request, response: Response) {
        const { shop } = request.body;

        const createShopUseCase = new CreateShopUseCase(); 
        try {
            const [clientId, shopItemsReq] = [shop.clientId, shop.shopItemsReq];
            const createdShop = await createShopUseCase.execute({ clientId, shopItemsReq });

            return response.json({ 'shop': createdShop });
        } catch(error) {
            console.log(error)
            return response.json({ 'error': error });
        }
    }
}

export { CreateShopController }