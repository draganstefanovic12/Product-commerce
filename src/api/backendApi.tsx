import axios from "axios";

export const backendApi = axios.create({
  baseURL: "http://localhost:5006",
});

backendApi.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("appUser")!);
  config.headers!["Authorization"] = `Bearer ${user!.token}`;
  return config;
});

export const changePassword = async (password: string, newPassword: string) => {
  const response = await backendApi.post("/users/changepw", {
    password: password,
    newPassword: newPassword,
  });
  return response.data;
};
