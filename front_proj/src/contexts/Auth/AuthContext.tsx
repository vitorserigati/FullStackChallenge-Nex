import { createContext } from "react";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/useApi";

export type User = {
  id: string | null;
  name: string;
  email: string;
};

interface IAuthContextType {
  signed: boolean;
  user: User | null;
  signin: (email: string, password: string) => Promise<Boolean>;
  signout: () => void;
}

export const AuthContext = createContext<IAuthContextType>(null!);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);

  const api = useApi();
  useEffect(() => {
    const searchLocalData = async () => {
      const storageToken = localStorage.getItem("authToken");
      const storageUser = localStorage.getItem("user");

      if (storageToken && storageUser) {
        const user = JSON.parse(storageUser);
        setUser(user);
      }
    };
    searchLocalData();
  }, []);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);

    if (data.user && data.token) {
      setUser(data.user);
      setLocalStorage(data.user, data.token);

      return true;
    }
    return false;
  };
  const signout = async () => {
    setUser(null);
    localStorage.clear;
  };
  const setLocalStorage = (user: object, token: string) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
