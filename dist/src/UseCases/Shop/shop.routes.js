"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopRoutes = void 0;
const express_1 = require("express");
const createShopController_1 = require("./createShop/createShopController");
const shopRoutes = (0, express_1.Router)();
exports.shopRoutes = shopRoutes;
const createShopController = new createShopController_1.CreateShopController();
shopRoutes.post('/', createShopController.handle);
//# sourceMappingURL=shop.routes.js.map