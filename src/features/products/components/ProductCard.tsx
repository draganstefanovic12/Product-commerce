import { Product } from "../types";

type ProductProps = {
  product?: Product[];
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="rounded-lg shadow w-60 p-2">
      <h2>Product name</h2>
      <img src="product-img" alt="prod-img" />
      <p>product price</p>
    </div>
  );
};

export default ProductCard;
