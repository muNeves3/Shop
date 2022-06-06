import { Request, Response } from "express";
import { GetItemUseCase } from "./getItemUseCase";

class GetItemController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const getItemUseCase = new GetItemUseCase();

        try {
            const item = await getItemUseCase.execute({ id });

            return response.json({ 'item': item });
        } catch(error) {
            return response.json({ 'error': error });
        }
    }
}

export { GetItemController }