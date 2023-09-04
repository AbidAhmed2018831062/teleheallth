import axios from "axios";
export const api = axios.create({
  baseURL: "http://localhost:5000/",
});
function getAuthToken() {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user)?.token;
  }
}

api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
