import { AuthContext } from "../contexts/Auth/AuthContext";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, CreateAccount, HomePage } from "../pages";

export function Router() {
  const auth = useContext(AuthContext);
  console.log(auth.signed);
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<CreateAccount />} />
      <Route path="/home" element={auth.user ? <HomePage /> : <LoginPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}
