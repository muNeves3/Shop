import { Router } from "express";
import { clientsRouter } from "./UseCases/Clients/clients.routes";
import { itemsRouter } from "./UseCases/Items/items.routes";
import { sellersRouter } from "./UseCases/Sellers/sellers.routes";

const router = Router();

router.use('/clients', clientsRouter);
router.use('/items', itemsRouter);
router.use('/sellers', sellersRouter);

export { router }