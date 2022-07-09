import { Router } from "express";
import { CreateShopController } from "./createShop/createShopController";

const shopRoutes = Router();

const createShopController = new CreateShopController();

shopRoutes.post('/', createShopController.handle);

export { shopRoutes } 