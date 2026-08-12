import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api',
  timeout: 10000,
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response) {
//       console.error('[API Error]', {
//         status: error.response.status,
//         data: error.response.data,
//         url: error.config?.url,
//       });
//     } else if (error.request) {
//       console.error('[API Error] No response received:', error.message);
//     } else {
//       console.error('[API Error]', error.message);
//     }

//     return Promise.reject(error);
//   }
// );

export default api;
