import { useCallback, useState } from "react";
import { IItems } from "../interfaces";
import { useApi } from "./useApi";

export const useItems = () => {
  const [items, setItems] = useState<IItems[]>([]);
  const api = useApi();

  const getAll = useCallback(async () => {
    const { status, data } = await api.getAllItem();

    if (status !== 200) throw new Error();

    setItems(data);
  }, []);

  return {
    items,
    getAll,
  };
};
