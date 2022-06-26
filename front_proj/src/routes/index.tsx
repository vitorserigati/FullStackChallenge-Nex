import { Routes, Route } from "react-router-dom";
import { LoginPage, CreateAccount } from "../pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<CreateAccount />} />

      <Route path="*" element={<LoginPage />} />
    </Routes>
  );
}
