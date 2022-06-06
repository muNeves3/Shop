import { Router } from "express";
import { CreateSellerController } from "./createSeller/createSellerController";
import { DeleteSellerController } from "./deleteSeller/delteSellerController";
import { GetSellerItemsController } from "./getSellerItems/getSellerItemsController";

const sellersRouter = Router();

const createSellerController = new CreateSellerController();
const deleteSellerController = new DeleteSellerController();
const getSellerItemsController = new GetSellerItemsController();

sellersRouter.post('/', createSellerController.handle);
sellersRouter.delete('/:id', deleteSellerController.handle);
sellersRouter.get('/:id/items', getSellerItemsController.handle);

export { sellersRouter } 