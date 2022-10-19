interface ISellerRequest {
    email: string;
}
declare class GetSellerByEmailUseCase {
    execute({ email }: ISellerRequest): Promise<import(".prisma/client").Seller>;
}
export { GetSellerByEmailUseCase };
