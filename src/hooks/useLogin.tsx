import { useUser } from "../context/UserContext";
import { useState } from "react";
import { backendApi } from "../api/backendApi";
import { AxiosResponse } from "axios";

type LoginProps = {
  username: string;
  password: string;
};

type res = {
  username: string;
  token: string;
};

const useLogin = () => {
  const { dispatch } = useUser();
  const [error, setError] = useState<null | string>(null);

  const login = async (user: LoginProps) => {
    const { username, password } = user;
    const response = (await backendApi
      .post("/users/login", { username, password })
      .catch((e) => setError(e.response.data.message))) as AxiosResponse<res>;

    //If the response is ok saving the user to localstorage
    if (response.status === 200) {
      localStorage.setItem("appUser", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
    }
    return response.data;
  };

  return { login, error };
};

export default useLogin;
