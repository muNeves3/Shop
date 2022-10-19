import { Request, Response } from "express";
declare class GetSellerItemsController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { GetSellerItemsController };
