import "./index.css";
import "./reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRoutes from "./routes";
import { AuthContextProvider } from "./features/auth/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRoutes />
    </AuthContextProvider>
  </React.StrictMode>
);
