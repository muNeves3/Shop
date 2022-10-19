"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemsRouter = void 0;
const express_1 = require("express");
const createItemController_1 = require("./createItem/createItemController");
const deleteItemController_1 = require("./deleteItem/deleteItemController");
const getItemController_1 = require("./getItem/getItemController");
const listItemsController_1 = require("./listItems/listItemsController");
const itemsRouter = (0, express_1.Router)();
exports.itemsRouter = itemsRouter;
const createItemController = new createItemController_1.CreateItemController();
const deleteItemController = new deleteItemController_1.DeleteItemController();
const getItemController = new getItemController_1.GetItemController();
const listItemsController = new listItemsController_1.ListItemsController();
itemsRouter.post('/', createItemController.handle);
itemsRouter.delete('/:id', deleteItemController.handle);
itemsRouter.get('/:id', getItemController.handle);
itemsRouter.get('/', listItemsController.handle);
//# sourceMappingURL=items.routes.js.map