import { CreateClientController } from "./createClient/createClientController";
import { DeleteClientController } from "./deleteClient/deleteClientController";
import { GetClientController } from "./getClientUseCase/getClientController";
import { ListClientController } from "./listClientUseCase/listClientController";
import { GetClientByEmailController } from "./getClientByEmailUseCase/getClientByEmailController";
import { Router } from "express";

const clientsRouter = Router();

const createClientController = new CreateClientController()
const deleteClientController = new DeleteClientController();
const listClientController = new ListClientController();
const getClientController = new GetClientController();
const getClientByEmailController = new GetClientByEmailController();

clientsRouter.post('/', createClientController.handle);
clientsRouter.delete('/:id', deleteClientController.handle);
clientsRouter.get('/', listClientController.handle);
clientsRouter.get('/:id', getClientController.handle);

export { clientsRouter }