import { Request, Response } from "express";
import { ListClientUseCase } from "./listClientUseCase";

class ListClientController {
    async handle(request: Request, response: Response) {
        const listClientUseCase = new ListClientUseCase();

        try {
            const clients = await listClientUseCase.execute();

            return response.json({'clients': clients})
        } catch(error) {
            return response.json({'error': error})
        }
    }
}

export { ListClientController }