import { useCart } from "../../shopping cart/context/ShoppingCartContext";
import { useAuth } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useAuth();
  const { setCart } = useCart();

  const logout = () => {
    localStorage.removeItem("commUser");
    localStorage.removeItem("commCart");

    dispatch({ type: "LOGOUT", payload: null });
    setCart([]);
  };

  return { logout };
};
