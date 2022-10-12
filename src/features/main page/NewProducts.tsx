import { Link } from "react-router-dom";
import { Product } from "../products/types";
import { useQuery } from "react-query";
import { getNewProducts } from "../../api/productApi";
import ProductCard from "../products/components/ProductCard";

const NewProducts = () => {
  const { data: products } = useQuery(["newProducts"], getNewProducts);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2 text-dark lato">New Products</h1>
      <div className="flex gap-3.5 flex-wrap">
        {products &&
          products.map((product: Product, i: number) => (
            <Link key={i} to={`/product/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default NewProducts;
