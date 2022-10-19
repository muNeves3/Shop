import { Request, Response } from "express";
declare class GetSellerByEmailController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { GetSellerByEmailController };
