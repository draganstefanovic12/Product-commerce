import { AxiosResponse } from "axios";
import { useState } from "react";
import { backendApi } from "../api/backendApi";
import { useUser } from "../context/UserContext";

type RegisterProps = {
  username: string;
  password: string;
  email: string;
};

type res = {
  username: string;
  token: string;
};

export const useRegister = () => {
  const { dispatch } = useUser();
  const [error, setError] = useState();

  const register = async (user: RegisterProps) => {
    const response = (await backendApi
      .post("/users/signup", {
        username: user.username,
        password: user.password,
        email: user.email,
      })
      .catch((e) => setError(e.response.data.message))) as AxiosResponse<res>;

    if (response.status === 200) {
      dispatch({ type: "LOGIN", payload: response.data });
    }

    return response.data;
  };

  return { register, error };
};
