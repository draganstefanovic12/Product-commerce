import axios from "axios";

export interface User {
  username: string;
  password: string;
  email?: string;
}

const backendApi = axios.create({
  baseURL: "http://localhost:5006",
});

export const login = async (user: User) => {
  const response = await backendApi.post("/users/login", {
    username: user.username,
    password: user.password,
  });

  return response.data;
};

export const signUp = async (user: User) => {
  const response = await backendApi.post("/users/signup", {
    username: user.username,
    password: user.password,
    email: user.email,
  });

  return response.data;
};
