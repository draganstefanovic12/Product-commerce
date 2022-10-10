import { Link } from "react-router-dom";
import { Product } from "../products/types";
import { useQuery } from "react-query";
import { getCategoryProducts } from "../../api/categoryCollectionApi";
import ProductCard from "../products/components/ProductCard";

type Props = {
  category: string;
};

const MainPageCategory = ({ category }: Props) => {
  const { data: products } = useQuery([`${category}main`], () => {
    return getCategoryProducts(category, "0");
  });

  return (
    <div>
      <h1 className="text-xl">{category}</h1>
      <div className="flex gap-3.5 flex-wrap">
        {products &&
          products.map((product: Product) => (
            <Link to={`/product/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MainPageCategory;
