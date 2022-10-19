import { Request, Response } from "express";
declare class DeleteSellerController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { DeleteSellerController };
