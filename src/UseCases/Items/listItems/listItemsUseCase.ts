import { client } from "../../../prisma/client";

class ListItemsUseCase {
    async execute() {
        const items = await client.item.findMany();

        return items;
    }
}

export { ListItemsUseCase }