import "./index.css";
import "./reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRoutes from "./routes";
import { UserContextProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <BrowserRoutes />
    </UserContextProvider>
  </React.StrictMode>
);
