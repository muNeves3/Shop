import { Request, Response } from "express";
declare class CreateSellerController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { CreateSellerController };
