import axios from 'axios';
import { urls } from '../constants/urls';

export default axios.create({
    baseUrl: urls.todos
});
