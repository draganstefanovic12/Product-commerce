import { useCart } from "../../features/shopping cart/context/ShoppingCartContext";
import { useAuth } from "../../features/auth/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import cartIcon from "../../assets/images/shopping-cart.svg";
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

  return (
    <nav className="bg-white w-full shadow hover:shadow-md fixed z-50 top-0 transition-shadow">
      <div className="container mx-auto py-5 flex justify-between child:cursor-pointer">
        <Link to="/">Home</Link>
        <div className="hidden md:flex space-x-6">
          <p onClick={handleSell}>Sell</p>
          <DropdownMenu name="Categories" children={<CategoriesDropdown />} />
          {!username && <button onClick={handleLogin}>Login</button>}
          {username && (
            <DropdownMenu name={username} children={<ProfileDropdown />} />
          )}
          <div className="relative">
            <img
              src={cartIcon}
              alt="cart"
              className="h-5"
              onClick={handleCreateProduct}
            />
            {cart.length > 0 && (
              <p className="absolute bottom-5 right-0 text-red-700 bg-white h-3">
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
