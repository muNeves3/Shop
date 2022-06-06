import { Request, Response } from "express";
import { CreateItemUseCase } from "./createItemUseCase";

class CreateItemController {
    async handle(request: Request, response: Response) {
        const { name, description, price, sellerId } = request.body;
        const createItemUseCase = new CreateItemUseCase();

        try {
            const item = await createItemUseCase.execute({ description, name, price, sellerId });

            return response.json({ 'item': item });
        } catch(error) {
            return response.json({ 'error': error });
        }
    }
}

export { CreateItemController }