import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../api/backendApi";
import SellProduct from "../features/products/components/SellProduct";

const Categories = () => {
  const { category, offset } = useParams();
  const { isLoading, data } = useQuery(["category"], () => {
    return getCategoryProducts(category, offset);
  });

  console.log(data);
  if (isLoading) {
    return <p>spinner placeholder</p>;
  }

  return <div></div>;
};

export default Categories;
