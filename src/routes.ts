import { Router } from "express";
import { clientsRouter } from "./UseCases/Clients/clients.routes";
import { itemsRouter } from "./UseCases/Items/items.routes";
import { sellersRouter } from "./UseCases/Sellers/sellers.routes";
import { shopItemRoutes } from "./UseCases/ShopItem/shopItems.routes";

const router = Router();

router.use('/clients', clientsRouter);
router.use('/items', itemsRouter);
router.use('/sellers', sellersRouter);
router.use('/shopItems', shopItemRoutes);

export { router }