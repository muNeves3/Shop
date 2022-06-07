import { Router } from "express";
import { GetClientController } from "../Clients/getClientUseCase/getClientController";
import { CreateItemController } from "./createItem/createItemController";
import { DeleteItemController } from "./deleteItem/deleteItemController";
import { GetItemController } from "./getItem/getItemController";
import { ListItemsController } from "./listItems/listItemsController";

const itemsRouter = Router();

const createItemController = new CreateItemController();
const deleteItemController = new DeleteItemController();
const getItemController = new GetItemController();
const listItemsController = new ListItemsController();

itemsRouter.post('/', createItemController.handle);
itemsRouter.delete('/:id', deleteItemController.handle);
itemsRouter.get('/:id', getItemController.handle);
itemsRouter.get('/', listItemsController.handle);

export { itemsRouter }