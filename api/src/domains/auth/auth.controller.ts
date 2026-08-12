import { Request, Response } from 'express'
import { AuthService } from './auth.service'
import { AppError } from '../../utils/AppError'

const authService = new AuthService()

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const user = await authService.register(email, password)
            return res.status(201).json(user)
        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            console.error(error)
            return res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body
            const { token, user } = await authService.login(email, password)

            res.cookie('token', token, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                maxAge: 60 * 60 * 1000,
            })

            return res.status(200).json({ user })
        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ error: error.message })
            }
            console.error(error)
            return res.status(500).json({ error: 'Erro interno do servidor' })
        }
    }

    async logout(req: Request, res: Response) {
        res.clearCookie('token')
        return res.status(200).json({ message: 'Logout realizado com sucesso' })
    }

    async me(req: Request, res: Response) {
        return res.status(200).json({ user: req.user })
    }
}