import axios from "axios";

const backendApi = axios.create({
  baseURL: "http://localhost:5000",
});

export const login = async (username: string, password: string) => {
  const response = await backendApi.post("/users/login");
  return response.data;
};

export const signUp = async (username: string, password: string) => {
  const response = await backendApi.post("/users/signup");
  return response.data;
};
