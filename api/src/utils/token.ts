import jwt, { SignOptions } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET não está definido nas variáveis de ambiente')
}

interface TokenPayload {
    id: number
    email: string
}

const expiresIn = (JWT_EXPIRES_IN ?? '1h') as NonNullable<SignOptions['expiresIn']>

export function generateToken(payload: TokenPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn })
}

export function verifyToken(token: string): TokenPayload {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload
    return decoded
}