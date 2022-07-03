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

  deleteItembyId: async (id: string) => {
    try {
      await api.delete(`${import.meta.env.VITE_APP_API_ITEMS}/${id}`);
    } catch (error) {
      console.error(error);
      return new Error(
        (error as { message: string }).message || "Erro ao excluir o registro"
      );
    }
  },

  addNewItem: async (name: string, description: string, value: number) => {
    try {
      const response = await api.post<IItems>(
        import.meta.env.VITE_APP_API_ITEMS,
        {
          name,
          description,
          value,
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
      return new Error(
        (error as { message: string }).message || "Erro ao excluir o registro"
      );
    }
  },
  editItemsById: async (
    id: string,
    name?: string,
    value?: number,
    description?: string
  ) => {
    try {
      const response = await api.put(
        `${import.meta.env.VITE_APP_API_ITEMS}/${id}`,
        { name, value, description }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return new Error(
        (error as { message: string }).message || "Erro ao moidificar o Item"
      );
    }
  },
});
