interface IItemRequest {
    name: string;
    price: number;
    description: string;
    sellerId: string;
}
declare class CreateItemUseCase {
    execute({ name, price, description, sellerId }: IItemRequest): Promise<{
        sellerExists: import(".prisma/client").Seller;
        id: string;
        name: string;
        price: import("@prisma/client/runtime").Decimal;
        description: string;
        created_at: Date;
        sellerId: string;
        shopItemId: string;
    }>;
}
export { CreateItemUseCase };
