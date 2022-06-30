import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post("/users/session", { token });
    console.log(response);
    return response.data;
  },
  signin: async (email: string, password: string) => {
    const response = await api.post("/users/session", { email, password });
    return response.data;
  },

  createUser: async (name: string, email: string, password: string) => {
    const response = await api.post("/users", { name, email, password });
    return response.data;
  },
});
