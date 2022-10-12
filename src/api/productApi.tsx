import { Product } from "../features/products/types";
import { backendApi } from "./backendApi";

export const createProduct = async (
  files: FileList | null | undefined,
  product: Product
) => {
  const formData = new FormData();

  for (let i = 0; i < files!.length; i++) {
    formData.append("fileupload", files![i]);
  }

  //appending images and product to form data
  formData.append("product", JSON.stringify(product));

  const response = await backendApi.post("/products/product/new", formData);
  return response.data;
};

//fetches a single product
export const getProduct = async (id: string | undefined) => {
  const response = await backendApi.get(`/products/product/${id}`);
  return response.data;
};

//fetches new products on main page
export const getNewProducts = async () => {
  const response = await backendApi.get("/products/product/new");
  return response.data;
};

export const addToWatchlist = async (product: Product | undefined) => {
  const response = await backendApi.post("/watchlist", {
    product: product,
  });
  return response.data;
};

export const deleteProduct = async (_id: string | undefined) => {
  const response = await backendApi.post(`/products/product/delete/${_id}`);
  return response.data;
};

export const editProduct = async (product: Product, id: string | undefined) => {
  const response = await backendApi.post(`/products/product/edit/${id}`, {
    newProd: product,
  });
  return response.data;
};
