import axios from "axios";

export const backendApi = axios.create({
  baseURL: "http://localhost:5006",
});

//interceptor that attaches user token to every request that requires one
backendApi.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("commUser")!);
  if (!user) {
    return config;
  }
  config.headers!["Authorization"] = `Bearer ${user!.token}`;
  return config;
});
