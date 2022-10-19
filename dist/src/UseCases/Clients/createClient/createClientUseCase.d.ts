interface IClientRequest {
    name: string;
    email: string;
    password: string;
}
declare class CreateClientUseCase {
    execute({ email, name, password }: IClientRequest): Promise<import(".prisma/client").Client>;
}
export { CreateClientUseCase };
