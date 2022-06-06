import { Request, Response } from "express";
import { GetSellerItemsUseCase } from "./getSellerItemsUseCase";

class GetSellerItemsController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const getSellerItemsUseCase = new GetSellerItemsUseCase();

        try {
            const items = await getSellerItemsUseCase.execute({ id });

            return response.json({ 'items': items });
        } catch(error) {
            return response.json({ 'error': error });
        }
    }
}

export { GetSellerItemsController }