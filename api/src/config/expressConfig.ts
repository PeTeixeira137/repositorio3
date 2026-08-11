import cookieParser from 'cookie-parser'
import cors from 'cors'

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))

app.use(cookieParser())

app.use('/auth', authRoutes)