import { Request, Response } from "express";
declare class CreateShopItemController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateShopItemController };
