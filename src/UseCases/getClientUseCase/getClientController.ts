import { Request, Response } from "express";
import { GetClientUseCase } from "./getClientUseCase";

class GetClientController {
    async handle(request: Request, response: Response) {
        const { id } = request.params
        const getClientUseCase = new GetClientUseCase();

        try {
            const client = await getClientUseCase.execute({ id });

            return response.json({'client': client});
        } catch(error) {
            return response.json({ 'error': error })
        }
    }
}

export { GetClientController }