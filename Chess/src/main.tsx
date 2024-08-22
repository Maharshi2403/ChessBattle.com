import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Frontend/Chess.UI.tsx";
import "./Frontend/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
