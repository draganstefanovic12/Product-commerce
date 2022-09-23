import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRoutes from "./routes";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRoutes />
  </React.StrictMode>
);
