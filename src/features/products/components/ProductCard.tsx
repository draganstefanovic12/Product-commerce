import { Product } from "../types";

type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="rounded-lg w-64 outline-grey-200 outline-2 shadow-md hover:shadow-lg px-2 transition-shadow md:w-60 cursor-pointer">
      <img
        src={`http://localhost:5006${product.images![0]}`}
        alt="img"
        className="h-52 object-cover"
      />
      <div className="flex w-full justify-between">
        <h2 className="whitespace-nowrap font-bold text-dark overflow-hidden overflow-ellipsis">
          {product.name}
        </h2>
        <div className="flex gap-2">
          <p className="text-secondary">{product.price}$</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
