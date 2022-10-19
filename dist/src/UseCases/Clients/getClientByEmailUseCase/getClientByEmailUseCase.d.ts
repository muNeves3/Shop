import { Client } from "@prisma/client";
interface IClientRequest {
    email: string;
}
declare class GetClientByEmailUseCase {
    execute({ email }: IClientRequest): Promise<Client>;
}
export { GetClientByEmailUseCase };
