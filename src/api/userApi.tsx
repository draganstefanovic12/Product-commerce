import { backendApi } from "./backendApi";

export const getProfile = async (user: string | undefined) => {
  const response = await backendApi.get(`/users/profile/${user}`);
  return response.data;
};

export const changePassword = async (password: string, newPassword: string) => {
  const response = await backendApi.post("/users/changepw", {
    password: password,
    newPassword: newPassword,
  });
  return response.data;
};
export const changeUsername = async (newUsername: string) => {
  const response = await backendApi.post("/users/changeusername", {
    newUsername: newUsername,
  });
  return response.data;
};

export const changeAvatar = async (file: File) => {
  const formData = new FormData();
  formData.append("fileupload", file);
  const response = await backendApi.post("/users/avatar/upload", formData);
  return response.data;
};

//passing product id
export const addToWishlist = async (id: string | undefined) => {
  const response = await backendApi.post(`/users/wishlist/${id}`);
  return response.data;
};

export const removeAvatar = async () => {
  const response = await backendApi.post("/users/avatar/remove");
  return response.data;
};

export const handleSearch = async (query: string | undefined) => {
  const response = await backendApi.get(`/users/search/${query}`);
  return response.data;
};
