import { Router } from "express";
import { CreateClientController } from "./UseCases/createClient/createClientController";
import { DeleteClientController } from "./UseCases/deleteClient/deleteClientController";
import { GetClientController } from "./UseCases/getClientUseCase/getClientController";
import { ListClientController } from "./UseCases/listClientUseCase/listClientController";

const router = Router();
const createClientController = new CreateClientController()
const deleteClientController = new DeleteClientController();
const listClientController = new ListClientController();
const getClientController = new GetClientController();

router.post('/clients', createClientController.handle);
router.delete('/clients/:id', deleteClientController.handle);
router.get('/clients', listClientController.handle);
router.get('/clients/:id', getClientController.handle);

export { router }