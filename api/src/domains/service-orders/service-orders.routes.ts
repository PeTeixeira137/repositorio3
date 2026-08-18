import { Router } from 'express'
import serviceOrdersController from './service-orders.controller'
import { authMiddleware } from '../../middlewares/authMiddleware'

const serviceOrdersRoutes = Router()
serviceOrdersRoutes.use(authMiddleware)

serviceOrdersRoutes.get('/', serviceOrdersController.getAll)
serviceOrdersRoutes.get('/:id', serviceOrdersController.getById)
serviceOrdersRoutes.post('/', serviceOrdersController.create)
serviceOrdersRoutes.put('/:id', serviceOrdersController.update)
serviceOrdersRoutes.delete('/:id', serviceOrdersController.delete)

export { serviceOrdersRoutes }