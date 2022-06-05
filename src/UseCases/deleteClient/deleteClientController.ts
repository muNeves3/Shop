import { Request, Response } from "express";
import { DeleteClientUseCase } from "./deleteClientUseCase";

class DeleteClientController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deleteClientUseCase = new DeleteClientUseCase();

        try {
            await deleteClientUseCase.execute({ id });

            return response.json({'client': 'client deleted with success'})
        } catch(error) {
            return response.json({'error': error})
        }
    }
}

export { DeleteClientController }