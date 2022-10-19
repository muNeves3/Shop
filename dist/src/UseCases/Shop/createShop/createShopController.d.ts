import { Request, Response } from "express";
declare class CreateShopController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateShopController };
