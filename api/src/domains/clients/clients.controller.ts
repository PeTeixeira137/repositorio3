import { Request, Response } from 'express'
import clientsService from './clients.service'

class ClientsController {
    async getAll(req: Request, res: Response) {
        try {
            const clients = await clientsService.getAll()
            return res.status(200).json(clients)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const client = await clientsService.getById(Number(req.params.id))
            if (!client) return res.status(404).json({ error: 'Cliente não encontrado' })
            return res.status(200).json(client)
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const client = await clientsService.create(req.body)
            return res.status(201).json(client)
        } catch (error) {
            console.error(error)
            return res.status(400).json({ error: 'Não foi possível criar o cliente' })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const client = await clientsService.update(Number(req.params.id), req.body)
            if (!client) return res.status(404).json({ error: 'Cliente não encontrado' })
            return res.status(200).json(client)
        } catch (error) {
            console.error(error)
            return res.status(400).json({ error: 'Não foi possível atualizar o cliente' })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const deleted = await clientsService.delete(Number(req.params.id))
            if (!deleted) return res.status(404).json({ error: 'Cliente não encontrado' })
            return res.status(204).send()
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }
}

export default new ClientsController()