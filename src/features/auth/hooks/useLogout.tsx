import { useAuth } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useAuth();

  const logout = () => {
    localStorage.removeItem("commUser");
    localStorage.removeItem("commCart");
    dispatch({ type: "LOGOUT", payload: null });
  };

  return { logout };
};
