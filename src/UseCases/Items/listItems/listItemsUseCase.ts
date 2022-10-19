import { Item } from "@prisma/client";
import { client } from "../../../prisma/client";
import RedisCachProvider from "../../../shared/providers/CacheProvider/RedisCachProvider";

class ListItemsUseCase {
  async execute() {
    const cacheProvider = new RedisCachProvider();
    const cachekey = `items`;

    let items = await cacheProvider.recover<Item[]>(cachekey);

    if (!items) {
      items = await client.item.findMany();

      await cacheProvider.save(cachekey, items);
    }

    return items;
  }
}

export { ListItemsUseCase };
