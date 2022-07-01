import { User } from "../types";

export interface IAuthContextType {
  signed: boolean;
  user: User | null;
  signin: (email: string, password: string) => Promise<Boolean>;
  signout: () => void;
}
