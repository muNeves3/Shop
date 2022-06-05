import { client } from "../../prisma/client";

class ListClientUseCase {
    async execute() {
        const users = await client.client.findMany();

        return users;
    }
}

export { ListClientUseCase }