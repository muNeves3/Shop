interface IItemRequest {
    id: string;
}
declare class DeleteItemUseCase {
    execute({ id }: IItemRequest): Promise<void>;
}
export { DeleteItemUseCase };
