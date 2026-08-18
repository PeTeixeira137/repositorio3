import { prisma } from '../../config/prismaClient'

interface ServiceOrderData {
    client_id: number
    device: string
    issue: string
    status: string
}

class ServiceOrdersService {
    async getAll() {
        return prisma.serviceOrder.findMany()
    }

    async getById(id: number) {
        return prisma.serviceOrder.findUnique({ where: { id } })
    }

    async create(data: ServiceOrderData) {
        return prisma.serviceOrder.create({ data })
    }

    async update(id: number, data: Partial<ServiceOrderData>) {
        const exists = await this.getById(id)
        if (!exists) return null
        return prisma.serviceOrder.update({ where: { id }, data })
    }

    async delete(id: number) {
        const exists = await this.getById(id)
        if (!exists) return false
        await prisma.serviceOrder.delete({ where: { id } })
        return true
    }
}

export default new ServiceOrdersService()