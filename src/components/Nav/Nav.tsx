import { useCart } from "../../features/shopping cart/context/ShoppingCartContext";
import { useAuth } from "../../features/auth/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import messages from "../../assets/images/messages.svg";
import cartIcon from "../../assets/images/shopping-cart.svg";
import SearchField from "./components/SearchField";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import HamburgerMenu from "./components/HamburgerMenu";
import ProfileDropdown from "./components/ProfileDropdown";
import CategoriesDropdown from "./components/CategoriesDropdown";

const Nav = () => {
  const { cart, isOpen, setIsOpen } = useCart();
  const { username } = useAuth();
  const navigate = useNavigate();

  const handleCreateProduct = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSell = () => {
    navigate("/sell");
  };

  const handleMessages = () => {
    navigate("/messages");
  };

  return (
    <nav className="bg-white w-full shadow hover:shadow-md fixed z-50 top-0 transition-shadow">
      <div className="container mx-auto py-5 flex justify-between child:cursor-pointer">
        <Link to="/">Home</Link>
        <div className="hidden md:flex space-x-6">
          <SearchField />
          {username && <p onClick={handleSell}>Sell</p>}
          <DropdownMenu name="Categories" children={<CategoriesDropdown />} />
          {!username && <button onClick={handleLogin}>Login</button>}
          {username && (
            <DropdownMenu name={username} children={<ProfileDropdown />} />
          )}
          <img
            onClick={handleMessages}
            src={messages}
            className="h-6"
            alt="msg"
          />
          <div className="relative" onClick={handleCreateProduct}>
            <img src={cartIcon} alt="cart" className="h-5" />
            {cart.length > 0 && (
              <p className="absolute bottom-3 rounded-xl -right-1 text-red-800 bg-white text-sm h-4">
                {cart.length}
              </p>
            )}
          </div>
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
