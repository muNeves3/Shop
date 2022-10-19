import { Request, Response } from "express";
declare class DeleteClientController {
    handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>>;
}
export { DeleteClientController };
