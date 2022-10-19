import { Request, Response } from "express";
declare class GetClientByEmailController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { GetClientByEmailController };
