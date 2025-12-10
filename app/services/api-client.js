import axios from "axios";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const errorMessage =
        error.response.data?.message ||
        `HTTP error! status: ${error.response.status}`;
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  }
);

export default apiClient;
