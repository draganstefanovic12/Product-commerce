import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";

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
  const { dispatch } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const register = async (user: RegisterProps) => {
    const response = (await axios
      .post("http://localhost:5006/users/signup", {
        username: user.username,
        password: user.password,
        email: user.email,
      })
      .catch((e) => setError(e.response.data.message))) as AxiosResponse<res>;

    if (response.status === 200) {
      localStorage.setItem("commUser", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
      navigate("/");
    }

    return response.data;
  };

  return { register, error };
};
