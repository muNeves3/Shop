import { Request, Response } from "express";
import { CreateSellerUseCase } from "./createSellerUseCase";

class CreateSellerController {
    async handle(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const createSellerUseCase = new CreateSellerUseCase();

       try {
            const seller = await createSellerUseCase.execute({ name, email, password });

            return response.json({ 'seller': seller });
       } catch(error) {
           return response.json({ 'error': error });
       }
    }
}

export { CreateSellerController }