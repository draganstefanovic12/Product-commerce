export const useLogout = () => {
  const logout = () => {
    localStorage.clear();
  };

  return { logout };
};
