import { backendApi } from "./backendApi";

export const getCategoryProducts = async (
  category: string | undefined,
  offset: string | undefined
) => {
  const response = await backendApi.get(`/collection/${category}/${offset}`);
  return response.data;
};
