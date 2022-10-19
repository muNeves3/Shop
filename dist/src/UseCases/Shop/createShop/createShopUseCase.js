"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopUseCase = void 0;
const client_1 = require("../../../prisma/client");
const createShopItemUseCase_1 = require("../../ShopItem/createShopItem/createShopItemUseCase");
class CreateShopUseCase {
    async execute({ clientId, shopItemsReq }) {
        const createShopItemUseCase = new createShopItemUseCase_1.CreateShopItemUseCase();
        console.log("SHOPITENS PRIMEIRA: " + shopItemsReq + '\N\N');
        try {
            const shop = await client_1.client.shop.create({
                data: {
                    clientId,
                    created_at: new Date(),
                }
            });
            shopItemsReq.map(item => {
                item.shopId = shop.id;
            });
            console.log("SHOPITENS SEGUNDA: " + shopItemsReq + '\N\N');
            await createShopItemUseCase.execute({ items: shopItemsReq });
            const shopItems = await client_1.client.shopItem.findMany({
                where: {
                    shopId: shop.id,
                }
            });
            if (!shop) {
                throw new Error('Não foi possível criar a compra');
            }
            const shopWItems = Object.assign(Object.assign({}, shop), shopItems);
            return shopWItems;
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.CreateShopUseCase = CreateShopUseCase;
//# sourceMappingURL=createShopUseCase.js.map