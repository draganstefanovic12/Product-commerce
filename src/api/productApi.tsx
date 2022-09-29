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

  formData.append("product", JSON.stringify(product));

  const response = await backendApi.post("/products/product/new", formData);
  console.log(response.data);
};
