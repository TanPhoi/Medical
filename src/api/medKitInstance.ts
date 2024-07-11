import axios from 'axios';

const medKitInstance = axios.create({
  baseURL: 'https://668a557b2c68eaf3211c82d8.mockapi.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default medKitInstance;
