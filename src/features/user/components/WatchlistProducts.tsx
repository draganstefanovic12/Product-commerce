import ProductCard from "../../products/components/ProductCard";
import { ProfileCategoryProps } from "../types/types";

const WatchlistProducts = ({ products }: ProfileCategoryProps) => {
  const watchlistProducts = products.map((watchProd) => (
    <ProductCard product={watchProd} />
  ));

  return <>{watchlistProducts}</>;
};
export default WatchlistProducts;
