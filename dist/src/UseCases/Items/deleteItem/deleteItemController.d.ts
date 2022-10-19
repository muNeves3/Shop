import { Request, Response } from "express";
declare class DeleteItemController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { DeleteItemController };
