import axios from "axios";
import { IItems } from "../interfaces";

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

export const useApi = () => ({
  changeHeaders: (token: string) => {
    api.defaults.headers.common["Authorization"] = token;
  },
  getAllItem: async () => {
    const response = await api.get<IItems[]>(
      import.meta.env.VITE_APP_API_ITEMS
    );

    return response;
  },
  signin: async (email: string, password: string) => {
    const response = await api.post("/users/session", {
      email,
      password,
    });
    return response.data;
  },

  createUser: async (name: string, email: string, password: string) => {
    const response = await api.post("/users", {
      name,
      email,
      password,
    });
    return response.data;
  },
});
