import { Router } from "express";
import { CreateClientController } from "./UseCases/createUser/createClientController";

const router = Router();
const createClientController = new CreateClientController()

router.post('/clients', createClientController.handle);

export { router }