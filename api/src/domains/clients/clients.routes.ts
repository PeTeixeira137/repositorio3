import { Router } from 'express'
import clientsController from './clients.controller'
import { authMiddleware } from '../../middlewares/authMiddleware'

const clientsRoutes = Router()
clientsRoutes.use(authMiddleware) // protege todas as rotas abaixo

clientsRoutes.get('/', clientsController.getAll)
clientsRoutes.get('/:id', clientsController.getById)
clientsRoutes.post('/', clientsController.create)
clientsRoutes.put('/:id', clientsController.update)
clientsRoutes.delete('/:id', clientsController.delete)

export { clientsRoutes }