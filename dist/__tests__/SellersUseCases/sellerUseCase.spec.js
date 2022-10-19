"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = require("supertest");
const server_1 = require("../../src/server");
describe("Testing the CRUD of a seller", () => {
    it("should be able to create a seller", async () => {
        const seller = await (0, supertest_1.default)(server_1.app).post("/sellers").send({
            name: "Vendedor Teste",
            email: "vendedorteste@email.com",
            password: "123456",
            created_at: new Date(),
        });
        expect(seller.body.seller.name).toBe("Vendedor Teste");
        expect(seller.body.seller.email).toBe("vendedorteste@email.com");
        await (0, supertest_1.default)(server_1.app).delete(`/sellers/${seller.body.seller.id}`);
    });
});
//# sourceMappingURL=sellerUseCase.spec.js.map