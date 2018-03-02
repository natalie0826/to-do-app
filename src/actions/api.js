import axios from 'axios';
import { urls } from '../constants/urls';

export const api = axios.create({
    baseUrl: urls.todos,
    headers: {
        'Content-Type': 'application/json'
    },
    json: true
});
