import { client } from '../../../prisma/client';
import { hash } from 'bcryptjs';
import AppError from '../../../shared/AppError';

interface IClientRequest {
    name: string;
    email: string
    password: string;
}

class CreateClientUseCase {
    async execute({ email, name, password }: IClientRequest) {
        const clientAlreadyExists  = await client.client.findFirst({
            where: {
                email
            } 
        });

        if(clientAlreadyExists) {
            throw new AppError('Email already registered');
        }

        const hashedPassword = await hash(password, 8);

        const newClient = await client.client.create({
            data: {
                email,
                name,
                password: hashedPassword,
                created_at: new Date()
            }
        });

        return newClient
    }
}

export { CreateClientUseCase }