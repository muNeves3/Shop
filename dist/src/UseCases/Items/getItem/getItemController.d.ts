import { Request, Response } from "express";
declare class GetItemController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { GetItemController };
