import { Request, Response } from "express";
declare class ListItemsController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { ListItemsController };
