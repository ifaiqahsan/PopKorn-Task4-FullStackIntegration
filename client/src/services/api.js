import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    console.debug('[API] REQUEST', config.method?.toUpperCase(), config.url, config.params || config.data || '');
    return config;
  },
  (error) => {
    console.error('[API] REQUEST ERROR', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('[API] RESPONSE ERROR', error.response?.status, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;