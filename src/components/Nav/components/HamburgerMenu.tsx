import { Link } from "react-router-dom";
import { useAuth } from "../../../features/auth/context/AuthContext";
import { useCart } from "../../../features/shopping cart/context/ShoppingCartContext";
import { useState } from "react";
import { useLogout } from "../../../features/auth/hooks/useLogout";
import { categoryCovers } from "../../../features/categories/categoryCovers";
import cartImg from "../../../assets/images/shopping-cart.svg";

const HamburgerMenu = () => {
  const { logout } = useLogout();
  const { username } = useAuth();
  const { isOpen, setIsOpen } = useCart();
  const [showMenu, setShowMenu] = useState("hidden");
  const [stroke, setStroke] = useState("currentColor");

  const handleShowMenu = (): void => {
    setShowMenu(showMenu === "hidden" ? "flex" : "hidden");
    setStroke(stroke === "#fff" ? "currentColor" : "#fff");
  };

  const handleShowCartContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex md:hidden">
      <img
        src={cartImg}
        alt="cart"
        className="w-5"
        onClick={handleShowCartContent}
      />
      <svg
        onClick={handleShowMenu}
        fill="none"
        className="md:hidden sm:block w space-y-1 w-6 z-10 relative"
        viewBox="0 0 24 24"
        stroke={stroke}
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <ul
        className={`${showMenu} flex-col absolute top-0 left-0 w-full bg-blue-500 p-10 space-y-5 text-white text-center`}
      >
        {categoryCovers.map((category, i) => (
          <Link
            onClick={handleShowMenu}
            key={i}
            to={`/category/${category.name}/0`}
          >
            {category.name}
          </Link>
        ))}
        {username ? (
          <>
            <Link onClick={handleShowMenu} to={`/profile/${username}`}>
              Profile
            </Link>
            <Link onClick={handleShowMenu} to="/messages">
              Messages
            </Link>
            <Link onClick={handleShowMenu} to="/settings">
              Settings
            </Link>
            <p
              onClick={() => {
                logout();
                handleShowMenu();
              }}
            >
              Logout
            </p>
          </>
        ) : (
          <Link onClick={handleShowMenu} to="/login">
            Login
          </Link>
        )}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
