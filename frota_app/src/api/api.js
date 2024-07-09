// api/api.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000', // URL base do seu servidor backend
    timeout: 5000, // Tempo máximo de espera por uma resposta do servidor
});

export default instance;
