import { Request, Response } from "express";
import { DeleteItemUseCase } from "./deleteItemUseCase";

class DeleteItemController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const deleteItemUseCase = new DeleteItemUseCase();

        try {
            await deleteItemUseCase.execute({ id });

            return response.json({ 'message': 'Item deleted succesfully' });
        } catch(error) {
            return response.json({ 'error': error });
        }
    }
}

export { DeleteItemController }