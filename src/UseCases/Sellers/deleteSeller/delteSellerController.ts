import { Request, Response } from "express";
import { DeleteSellerUseCase } from "./deleteSellerUseCase";

class DeleteSellerController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deleteSellerUseCase = new DeleteSellerUseCase();

        try {
            deleteSellerUseCase.execute({ id });

            return response.json({ 'message': 'Seller deleted succesfully' });
        } catch(error) {
            return response.json({ 'error': error });
        }
    }
}

export { DeleteSellerController }