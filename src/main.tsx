import "./index.css";
import "./reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRoutes from "./routes";
import { AuthContextProvider } from "./features/auth/context/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRoutes />
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
