import "./index.css";
import "./reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import BrowserRoutes from "./routes";
import { AuthContextProvider } from "./features/auth/context/AuthContext";
import { CartContextProvider } from "./features/shopping cart/context/ShoppingCartContext";
import { UserContextProvider } from "./features/user/context/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <AuthContextProvider>
          <CartContextProvider>
            <BrowserRoutes />
          </CartContextProvider>
        </AuthContextProvider>
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
