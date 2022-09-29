import { Product } from "../types";

type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="rounded-lg shadow hover:shadow-lg transition-shadow hover:cursor-pointer w-60 p-2">
      <img src={`http://localhost:5006${product.images![0]}`} alt="img" />
      <div className="flex w-full justify-between">
        <h2>{product.name}</h2>
        <p>{product.price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
