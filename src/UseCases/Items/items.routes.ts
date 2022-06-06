import { Router } from "express";
import { GetClientController } from "../Clients/getClientUseCase/getClientController";
import { CreateItemController } from "./createItem/createItemController";
import { DeleteItemController } from "./deleteItem/deleteItemController";
import { GetItemController } from "./getItem/getItemController";

const itemsRouter = Router();

const createItemController = new CreateItemController();
const deleteItemController = new DeleteItemController();
const getItemController = new GetItemController();

itemsRouter.post('/', createItemController.handle);
itemsRouter.delete('/:id', deleteItemController.handle);
itemsRouter.get('/:id', getItemController.handle);

export { itemsRouter }