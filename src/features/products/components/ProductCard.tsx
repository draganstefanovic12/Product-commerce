import { Product } from "../types";

type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="rounded-lg w-32 outline-grey-200 outline-2 shadow-lg hover:shadow-xl px-2 transition-shadow md:w-60 cursor-pointer">
      <img
        src={`http://localhost:5006${product.images![0]}`}
        alt="img"
        className="w-full h-32 md:h-52 object-cover"
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
