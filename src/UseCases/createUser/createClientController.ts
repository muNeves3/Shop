import { Request, Response } from "express";
import { CreateClientUseCase } from "./createClientUseCase";

class CreateClientController {
    async handle(request: Request, response: Response) {
        const { email, name, password } = request.body;

        const createClientUseCase = new CreateClientUseCase();

        try {
            const client = await createClientUseCase.execute({
                email,
                name,
                password
            });

            return response.json({'client': client})
        } catch(error) {
            return response.json({'error': error})
        }
        

    }
}

export { CreateClientController };