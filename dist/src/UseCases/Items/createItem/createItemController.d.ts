import { Request, Response } from "express";
declare class CreateItemController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateItemController };
