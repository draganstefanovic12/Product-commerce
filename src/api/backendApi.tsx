import axios from "axios";

export const backendApi = axios.create({
  baseURL: "http://localhost:5006",
});

export const getProfile = async (user: string | undefined) => {
  const response = await backendApi.get(`/users/profile/${user}`);
  return response.data;
};

export const getCategoryProducts = async (
  category: string | undefined,
  offset: string | undefined
) => {
  const response = await backendApi.get(
    `/products/category/${category}/${offset}`
  );
  return response.data;
};

//interceptor that attaches user token to every request that requires one
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

export const changeAvatar = async (file: File) => {
  const formData = new FormData();
  formData.append("fileupload", file);
  const response = await backendApi.post("/users/avatar/upload", formData);
  return response.data;
};

export const removeAvatar = async () => {
  const response = await backendApi.post("/users/avatar/remove");
  return response.data;
};
