"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopItemRoutes = void 0;
const express_1 = require("express");
const createShopItemController_1 = require("./createShopItem/createShopItemController");
const shopItemRoutes = (0, express_1.Router)();
exports.shopItemRoutes = shopItemRoutes;
const createShopItemController = new createShopItemController_1.CreateShopItemController();
shopItemRoutes.post('/', createShopItemController.handle);
//# sourceMappingURL=shopItems.routes.js.map