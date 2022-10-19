"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const clients_routes_1 = require("./UseCases/Clients/clients.routes");
const items_routes_1 = require("./UseCases/Items/items.routes");
const sellers_routes_1 = require("./UseCases/Sellers/sellers.routes");
const shop_routes_1 = require("./UseCases/Shop/shop.routes");
const shopItems_routes_1 = require("./UseCases/ShopItem/shopItems.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use('/clients', clients_routes_1.clientsRouter);
router.use('/items', items_routes_1.itemsRouter);
router.use('/sellers', sellers_routes_1.sellersRouter);
router.use('/shop', shop_routes_1.shopRoutes);
router.use('/shopItems', shopItems_routes_1.shopItemRoutes);
//# sourceMappingURL=routes.js.map