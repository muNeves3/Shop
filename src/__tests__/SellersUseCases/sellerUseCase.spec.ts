import request from 'supertest';
import { app } from "../../server"

describe('Testing the CRUD of a seller', () => {
    it('should be able to create a seller', async () => {
        const seller = await request(app).post('/sellers').send({
            name: 'Vendedor Teste',
            email: 'vendedorteste@email.com',
            password: '123456',
            created_at: new Date()
        });

        expect(seller.body.seller.name).toBe('Vendedor Teste');
        expect(seller.body.seller.email).toBe('vendedorteste@email.com');        
        await request(app).delete(`/sellers/${seller.body.seller.id}`);
    });
});