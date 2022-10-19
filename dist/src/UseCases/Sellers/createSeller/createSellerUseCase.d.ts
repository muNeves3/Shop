interface ISellerRequest {
    name: string;
    email: string;
    password: string;
}
declare class CreateSellerUseCase {
    execute({ email, name, password }: ISellerRequest): Promise<import(".prisma/client").Seller>;
}
export { CreateSellerUseCase };
