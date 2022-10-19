interface ISellerRequest {
    id: string;
}
declare class DeleteSellerUseCase {
    execute({ id }: ISellerRequest): Promise<void>;
}
export { DeleteSellerUseCase };
