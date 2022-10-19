import { Item } from "@prisma/client";
interface IItemRequest {
    id: string;
}
declare class GetItemUseCase {
    execute({ id }: IItemRequest): Promise<Item>;
}
export { GetItemUseCase };
