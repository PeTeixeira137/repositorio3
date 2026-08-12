import { Request, Response } from 'express'
import serviceOrdersService from './service-orders.service'

class ServiceOrdersController {
    async getAll(req: Request, res: Response) {
        try {
            const orders = await serviceOrdersService.getAll()
            return res.status(200).json(orders)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const order = await serviceOrdersService.getById(Number(req.params.id))
            if (!order) return res.status(404).json({ error: 'Ordem de serviço não encontrada' })
            return res.status(200).json(order)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const order = await serviceOrdersService.create(req.body)
            return res.status(201).json(order)
        } catch (error) {
            console.error(error)
            return res.status(400).json({ error: 'Não foi possível criar a ordem de serviço' })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const order = await serviceOrdersService.update(Number(req.params.id), req.body)
            if (!order) return res.status(404).json({ error: 'Ordem de serviço não encontrada' })
            return res.status(200).json(order)
        } catch (error) {
            console.error(error)
            return res.status(400).json({ error: 'Não foi possível atualizar a ordem de serviço' })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deleted = await serviceOrdersService.delete(Number(req.params.id))
            if (!deleted) return res.status(404).json({ error: 'Ordem de serviço não encontrada' })
            return res.status(204).send()
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }
}

export default new ServiceOrdersController()