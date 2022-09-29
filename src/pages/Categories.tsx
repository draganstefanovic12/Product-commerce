import { Product } from "../features/products/types";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getCategoryProducts } from "../api/categoryCollectionApi";
import ProductCard from "../features/products/components/ProductCard";

const Categories = () => {
  const { category, offset } = useParams();
  const { isLoading, data } = useQuery(["category", offset], () => {
    return getCategoryProducts(category, offset);
  });

  console.log(data);
  if (isLoading) {
    return <p>spinner placeholder</p>;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="container shadow h-screen p-2">
        {data.map((product: Product, i: number) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
