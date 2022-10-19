interface IClientRequest {
    id: string;
}
declare class GetClientUseCase {
    execute({ id }: IClientRequest): Promise<import(".prisma/client").Client>;
}
export { GetClientUseCase };
