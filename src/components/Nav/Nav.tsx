import { useCart } from "../../features/shopping cart/context/ShoppingCartContext";
import { useAuth } from "../../features/auth/context/AuthContext";
import { Message } from "../../features/messages/types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cartIcon from "../../assets/images/shopping-cart.svg";
import Messages from "./components/Messages";
import SearchField from "./components/SearchField";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import HamburgerMenu from "./components/HamburgerMenu";
import ProfileDropdown from "./components/ProfileDropdown";
import CategoriesDropdown from "./components/CategoriesDropdown";

export type UserMessage = {
  messages: Message[];
};

const Nav = () => {
  const { username } = useAuth();
  //theres no scrollbar in messages component so im using pathname to move the nav a bit to the left so it doesnt bounce around when switching pages
  const { pathname } = useLocation();
  const { cart, isOpen, setIsOpen } = useCart();
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

  return (
    <nav
      className={`bg-white w-full shadow hover:shadow-md fixed z-50 top-0 transition-shadow text-[#14181c] ${
        pathname === "/messages" && "-left-2"
      }`}
    >
      <div className="container mx-auto py-5 flex justify-between child:cursor-pointer">
        <Link to="/">Home</Link>
        <div className="hidden md:flex space-x-6">
          <SearchField />
          <DropdownMenu name="Categories" children={<CategoriesDropdown />} />
          {username && (
            <>
              <p onClick={handleSell}>Sell</p>
              <Messages />
              <DropdownMenu name={username} children={<ProfileDropdown />} />
            </>
          )}
          {!username && <button onClick={handleLogin}>Login</button>}
          <div className="relative" onClick={handleCreateProduct}>
            <img src={cartIcon} alt="cart" className="h-5 mt-0.5" />
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
