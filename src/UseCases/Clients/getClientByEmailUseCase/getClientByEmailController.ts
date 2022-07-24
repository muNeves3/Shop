import { Request, Response } from "express";
import { GetClientByEmailUseCase } from "./getClientByEmailUseCase";

class GetClientByEmailController {
    async handle(request: Request, response: Response) {
        const query = request.query;
        const email = ''
        console.log(query)
        const getClientByEmailUseCase = new GetClientByEmailUseCase();

        try {
            const client = await getClientByEmailUseCase.execute({ email });

            return response.json({'client': client});
        } catch(error) {
            return response.json({ 'error': error })
        }
    }
}

export { GetClientByEmailController }