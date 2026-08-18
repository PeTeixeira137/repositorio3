import { prisma } from '../../config/prismaClient'

interface ClientData {
    name: string
    email: string
    phone: string
    address: string
}

class ClientsService {
    async getAll() {
        return prisma.client.findMany()
    }

    async getById(id: number) {
        return prisma.client.findUnique({ where: { id } })
    }

    async create(data: ClientData) {
        return prisma.client.create({ data })
    }

    async update(id: number, data: Partial<ClientData>) {
        const exists = await this.getById(id)
        if (!exists) return null
        return prisma.client.update({ where: { id }, data })
    }

    async delete(id: number) {
        const exists = await this.getById(id)
        if (!exists) return false
        await prisma.client.delete({ where: { id } })
        return true
    }
}

export default new ClientsService()