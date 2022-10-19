import { Client } from ".prisma/client";
declare class ListClientUseCase {
    execute(): Promise<Client[]>;
}
export { ListClientUseCase };
