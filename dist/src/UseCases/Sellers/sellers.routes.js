"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellersRouter = void 0;
const express_1 = require("express");
const createSellerController_1 = require("./createSeller/createSellerController");
const delteSellerController_1 = require("./deleteSeller/delteSellerController");
const getSellerItemsController_1 = require("./getSellerItems/getSellerItemsController");
const sellersRouter = (0, express_1.Router)();
exports.sellersRouter = sellersRouter;
const createSellerController = new createSellerController_1.CreateSellerController();
const deleteSellerController = new delteSellerController_1.DeleteSellerController();
const getSellerItemsController = new getSellerItemsController_1.GetSellerItemsController();
sellersRouter.post('/', createSellerController.handle);
sellersRouter.delete('/:id', deleteSellerController.handle);
sellersRouter.get('/:id/items', getSellerItemsController.handle);
//# sourceMappingURL=sellers.routes.js.map