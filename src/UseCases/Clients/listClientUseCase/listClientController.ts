import { Request, Response } from "express";
import { GetClientByEmailUseCase } from "../getClientByEmailUseCase/getClientByEmailUseCase";
import { ListClientUseCase } from "./listClientUseCase";

class ListClientController {
    async handle(request: Request, response: Response) {
        const { email } = request.query;
        const listClientUseCase = new ListClientUseCase();
        
        try {
            if(email !== null && typeof email === 'string') {
                const getClientByEmailUseCase = new GetClientByEmailUseCase();
                const client = await getClientByEmailUseCase.execute({ email });

                return response.json({'client': client})
            } else {   
                const clients = await listClientUseCase.execute();

                return response.json({'clients': clients})
            }
        } catch(error) {
            return response.json({'error': error})
        }
    }
}

export { ListClientController }