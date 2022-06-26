import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/index";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
