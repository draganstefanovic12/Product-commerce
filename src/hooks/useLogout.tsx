import { useAuth } from "../context/AuthContext";

export const useLogout = () => {
  const { dispatch } = useAuth();

  const logout = () => {
    localStorage.removeItem("appUser");
    dispatch({ type: "LOGOUT", payload: null });
  };

  return { logout };
};
