import { Request, Response } from "express";
import { GetSellerByEmailUseCase } from "./getSellerByEmailUseCase";

class GetSellerByEmailController {
    async handle(request: Request, response: Response) {
        const query = request.query;
        const email = ''
        console.log(query)
        const getSellerByEmailUseCase = new GetSellerByEmailUseCase();

        try {
            const seller = await getSellerByEmailUseCase.execute({ email });

            return response.json({'seller': seller});
        } catch(error) {
            return response.json({ 'error': error })
        }
    }
}

export { GetSellerByEmailController }