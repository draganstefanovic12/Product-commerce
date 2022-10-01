import { useQuery, UseQueryResult } from "react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/productApi";
import { Product as ProductPage } from "../features/products/types";

const Product = () => {
  const { id } = useParams();
  const { isLoading, data: product } = useQuery(["product"], () => {
    return getProduct(id);
  }) as UseQueryResult<ProductPage>;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <div>{product?.name}</div>;
};

export default Product;
