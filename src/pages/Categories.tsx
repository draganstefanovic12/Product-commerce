import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../api/backendApi";
import CreateProduct from "../features/products/components/CreateProduct";
import ProductCard from "../features/products/components/ProductCard";

const Categories = () => {
  const { category, offset } = useParams();
  const { isLoading, data } = useQuery(["category"], () => {
    return getCategoryProducts(category, offset);
  });

  console.log(data);
  if (isLoading) {
    return <p>spinner placeholder</p>;
  }

  return <CreateProduct />;
};

export default Categories;
