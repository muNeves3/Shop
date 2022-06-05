import { Router } from "express";
import { CreateClientController } from "./UseCases/Clients/createClient/createClientController";
import { DeleteClientController } from "./UseCases/Clients/deleteClient/deleteClientController";
import { GetClientController } from "./UseCases/Clients//getClientUseCase/getClientController";
import { ListClientController } from "./UseCases/Clients//listClientUseCase/listClientController";
import { CreateItemController } from "./UseCases/Items/createItem/createItemController";
import { DeleteItemController } from "./UseCases/Items/deleteItem/deleteItemController";

const router = Router();

// CLIENTS
const createClientController = new CreateClientController()
const deleteClientController = new DeleteClientController();
const listClientController = new ListClientController();
const getClientController = new GetClientController();

router.post('/clients', createClientController.handle);
router.delete('/clients/:id', deleteClientController.handle);
router.get('/clients', listClientController.handle);
router.get('/clients/:id', getClientController.handle);

// END CLIENTS

// ITEMS
const createItemController = new CreateItemController();
const deleteItemController = new DeleteItemController();

router.post('/items', createItemController.handle);
router.delete('/items/:id', deleteItemController.handle);

export { router }