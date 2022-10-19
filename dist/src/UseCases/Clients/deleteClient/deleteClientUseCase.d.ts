interface IClientRequest {
    id: string;
}
declare class DeleteClientUseCase {
    execute({ id }: IClientRequest): Promise<void>;
}
export { DeleteClientUseCase };
