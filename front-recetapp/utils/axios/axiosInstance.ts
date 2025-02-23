import axios from 'axios';
import { apiUrl } from '@/constants';

export const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});