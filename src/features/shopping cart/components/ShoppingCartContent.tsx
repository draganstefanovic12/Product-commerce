import close from "../../../assets/images/close.svg";
import { useCart } from "../context/ShoppingCartContext";

const ShoppingCartContent = () => {
  const { cart, isOpen, setIsOpen } = useCart();
  const showCart = isOpen ? "translate-x-0" : "translate-x-96 hidden";

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${showCart} transition-transform md:block absolute bg-white right-0 shadow h-screen w-80 p-5 z-40`}
    >
      <img
        onClick={handleClose}
        src={close}
        alt="close"
        className="h-3 absolute right-3 top-3 cursor-pointer"
      />
      <p>Cart content: </p>
    </div>
  );
};

export default ShoppingCartContent;
