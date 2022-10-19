import { Item } from "@prisma/client";
declare class ListItemsUseCase {
    execute(): Promise<Item[]>;
}
export { ListItemsUseCase };
