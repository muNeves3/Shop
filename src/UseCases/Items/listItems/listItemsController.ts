import { Request, Response } from "express";
import { ListClientUseCase } from "../../Clients/listClientUseCase/listClientUseCase";

class ListItemsController {
    async handle(request: Request, response: Response) {
        const listItemsUseCase = new ListClientUseCase();

        try {
            const items = await listItemsUseCase.execute();

            return response.json({ 'items': items });
        } catch(error) {
            return response.json({ 'error': error });
        }
    }
}

export { ListItemsController }