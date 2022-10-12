import close from "../../../assets/images/close.svg";
import Button from "../../../components/Button";
import ShoppingCartProductBox from "./ShoppingCartProduxtBox";
import { useNavigate } from "react-router-dom";
import { CartProducts, useCart } from "../context/ShoppingCartContext";

const ShoppingCartContent = () => {
  const { isOpen, setIsOpen } = useCart();
  const navigate = useNavigate();
  const { cart } = useCart();
  const showCart = isOpen ? "translate-x-0" : "translate-x-96 hidden";

  const handleCheckout = () => {
    navigate("/checkout");
  };

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
      className={`${showCart} transition-transform md:block absolute bg-white right-0 shadow messages-height w-80 p-5 z-40`}
    >
      <img
        onClick={handleClose}
        src={close}
        alt="close"
        className="h-3 absolute right-3 top-7 cursor-pointer"
      />
      <p className="font-bold text-2xl">Cart content: </p>
      {cart.map((product: CartProducts, i) => (
        <ShoppingCartProductBox key={i} prop={product} className="shadow" />
      ))}
      <div className="self-end flex flex-col items-end mt-2">
        <div className="flex child:text-2xl w-full justify-between border-b-2 border-solid border-gray-100">
          <p>Total</p>
          <p>{totalPrice}$</p>
        </div>
        <Button
          onClick={handleCheckout}
          className="bg-gray-700 hover:bg-gray-800 w-2/5 mt-2 px-2 py-0"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default ShoppingCartContent;
