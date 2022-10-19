import { Request, Response } from "express";
declare class CreateClientController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateClientController };
