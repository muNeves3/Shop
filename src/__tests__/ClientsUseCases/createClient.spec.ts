import request from 'supertest';
import { app } from "../../server"

describe('Testing the creation of a client', () => {
    it('should be able to create a client', async () => { 
        const client = await request(app).post('/clients').send({
            name: 'Cliente Teste',
            email: 'clienteste@email.com',
            password: '123456'
        });

        expect(client.body.client.name).toBe('Cliente Teste');
        expect(client.body.client.email).toBe('clienteste@email.com');
    });

    it(`shouldn't be able to create two clients with the same email`, async () => {
        const response = await request(app).post('/clients').send({
            name: 'Cliente Teste',
            email: 'clienteste@email.com',
            password: '123456'
        });

        const client = await request(app).get('/clients').query({ email: 'clienteste@email.com' })

        expect(response.body.error.statusCode).toBe(400);

        await request(app).delete(`/clients/${client.body.client.id}`);
    });

    it(`should be able get a client by the id`, async () => {
        const createdClient = await request(app).post('/clients').send({
            name: 'Cliente Teste 2',
            email: 'clienteste2@email.com',
            password: '123456'
        });

        const client = await request(app).get(`/clients/${createdClient.body.client.id}`);

        expect(client.body.client.name).toBe('Cliente Teste 2');
        expect(client.body.client.email).toBe('clienteste2@email.com');

        
        await request(app).delete(`/clients/${createdClient.body.client.id}`);
    })
});