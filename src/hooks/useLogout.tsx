import { useUser } from "../context/UserContext";

export const useLogout = () => {
  const { dispatch } = useUser();

  const logout = () => {
    localStorage.removeItem("appUser");
    dispatch({ type: "LOGOUT", payload: null });
  };

  return { logout };
};
