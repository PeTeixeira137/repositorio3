import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.response.use(
    response => response,
    error => {
        const isAuthCheck = error.config?.url?.includes('/auth/me')
        const isOnLoginPage = window.location.pathname === '/login'

        if (error.response?.status === 401 && !isAuthCheck && !isOnLoginPage) {
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)