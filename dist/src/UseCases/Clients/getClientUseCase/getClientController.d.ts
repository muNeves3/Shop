import { Request, Response } from "express";
declare class GetClientController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { GetClientController };
