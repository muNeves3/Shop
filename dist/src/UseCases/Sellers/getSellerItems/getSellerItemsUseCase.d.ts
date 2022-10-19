import { Item } from "@prisma/client";
interface ISellerRequest {
    id: string;
}
declare class GetSellerItemsUseCase {
    execute({ id }: ISellerRequest): Promise<Item[]>;
}
export { GetSellerItemsUseCase };
