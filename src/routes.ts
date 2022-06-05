import { Router } from "express";
import { CreateClientController } from "./UseCases/createUser/createClientController";
import { DeleteClientController } from "./UseCases/deleteUser/deleteClientController";

const router = Router();
const createClientController = new CreateClientController()
const deleteClientController = new DeleteClientController();

router.post('/clients', createClientController.handle);
router.delete('/clients/:id', deleteClientController.handle);

export { router }