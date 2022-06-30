import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/Auth/AuthContext";
import { Router } from "./routes/index";

export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthProvider>
  );
}
