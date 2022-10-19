import { Request, Response } from "express";
declare class ListClientController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { ListClientController };
