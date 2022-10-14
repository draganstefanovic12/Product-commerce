import { CartProducts, useCart } from "../context/ShoppingCartContext";
import remove from "../../../assets/images/trash-icon.svg";
import Button from "../../../components/Button";

type ProductBoxProps = {
  prop: CartProducts;
  className?: string;
};

//using shadow and shadow-none as classname props to show the products differently
const ShoppingCartProductBox = ({ prop, className }: ProductBoxProps) => {
  const { removeFromCart, handleCount } = useCart();

  const handleRemoveFromCart = () => {
    removeFromCart(prop.product);
  };

  const handleIncrement = () => {
    //Can only buy the amount available in stock
    if (prop.count === parseInt(prop.product!.stock)) return;
    handleCount(prop.product, "increment");
  };

  const handleDecrement = () => {
    //Cant go below 1
    if (prop.count === 1) return;
    handleCount(prop.product, "decrement");
  };

  return (
    <div className="flex gap-3 mt-5">
      <div className={`w-full flex gap-2 relative rounded ${className}`}>
        <img
          src={`https://dragpersonalproj.xyz/product-commerce${
            prop!.product!.images![0]
          }`}
          alt="product"
          className={`${
            className === "shadow" ? "w-24" : "w-28"
          } object-cover h-28`}
        />
        <img
          src={remove}
          alt="remove"
          className="h-4 absolute top-1 right-1 cursor-pointer"
          onClick={handleRemoveFromCart}
        />
        <div className="w-3/5">
          <p className="whitespace-nowrap overflow-ellipsis text-dark font-bold overflow-hidden">
            {prop.product!.name}
          </p>
          <p className="text-secondary">{prop.product!.price}$</p>
        </div>
      </div>
      {className === "shadow" && (
        <div className="items-center flex flex-col">
          <Button
            onClick={handleIncrement}
            className="w-6 px-0 py-0 shadow bg-white"
          >
            +
          </Button>
          <p className="self-center">{prop.count}</p>
          <Button
            onClick={handleDecrement}
            className="w-6 px-0 py-0 shadow bg-white"
          >
            -
          </Button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartProductBox;
