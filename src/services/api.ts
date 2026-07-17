import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://trainee.fidelis.workers.dev/api',
    withCredentials: false,
    headers: {
        'Authorization': 'Bearer d9a7f7eb- 8b5e- 48be - 870c - f0a4ebf1bc46',
        'Content-Type': 'application/json',
    },
});