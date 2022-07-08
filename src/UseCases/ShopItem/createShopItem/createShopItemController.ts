import { Request, Response } from "express";
import { CreateShopItemUseCase } from "./createShopItemUseCase";

class CreateShopItemController {
    async handle(request: Request, response: Response) {
        const { items } = request.body;

        const createShopItemUseCase = new CreateShopItemUseCase();
        try {
            const createdItems = await createShopItemUseCase.execute({ items });

            return response.json({'items': createdItems})
        } catch(error) {
            return response.json({ 'error': error });
        }
    }
}

export { CreateShopItemController }