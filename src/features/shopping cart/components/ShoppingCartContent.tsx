import { CartProducts, useCart } from "../context/ShoppingCartContext";
import close from "../../../assets/images/close.svg";
import ShoppingCartProductBox from "./ShoppingCartProduxtBox";
import Button from "../../../components/Button";

const ShoppingCartContent = () => {
  const { isOpen, setIsOpen } = useCart();
  const { cart } = useCart();
  const showCart = isOpen ? "translate-x-0" : "translate-x-96 hidden";

  const handleClose = () => {
    setIsOpen(false);
  };

  const totalPrice = cart.reduce(
    (price, product) =>
      price + parseInt(product.product!.price) * product.count,
    0
  );

  return (
    <div
      className={`${showCart} transition-transform md:block absolute bg-white right-0 shadow h-screen w-80 p-5 z-40`}
    >
      <img
        onClick={handleClose}
        src={close}
        alt="close"
        className="h-3 absolute right-3 top-7 cursor-pointer"
      />
      <p>Cart content: </p>
      {cart.map((product: CartProducts) => (
        <ShoppingCartProductBox prop={product} />
      ))}
      <div className="self-end flex flex-col items-end mt-2">
        <div className="flex child:text-2xl w-full justify-between border-b-2 border-solid border-gray-100">
          <p>Total</p>
          <p>{totalPrice}$</p>
        </div>
        <Button className="bg-gray-700 hover:bg-gray-800 w-2/5 mt-2 px-2 py-0">
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartContent;
