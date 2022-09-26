import Nav from "./components/Nav";
import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRoutes from "./routes";
import "./index.css";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Nav />
    <BrowserRoutes />
  </React.StrictMode>
);
