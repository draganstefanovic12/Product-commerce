import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../api/categoryCollectionApi";

const Categories = () => {
  const { category, offset } = useParams();
  const { isLoading, data } = useQuery(["category", offset], () => {
    return getCategoryProducts(category, offset);
  });

  console.log(data);
  if (isLoading) {
    return <p>spinner placeholder</p>;
  }

  return <div></div>;
};

export default Categories;
