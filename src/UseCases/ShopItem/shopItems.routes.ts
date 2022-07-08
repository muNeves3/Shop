import { Router } from "express";
import { CreateShopItemController } from "./createShopItem/createShopItemController";

const shopItemRoutes = Router();

const createShopItemController = new CreateShopItemController();

shopItemRoutes.post('/', createShopItemController.handle);

export { shopItemRoutes } 