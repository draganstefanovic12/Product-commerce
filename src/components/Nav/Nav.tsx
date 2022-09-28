import { useAuth } from "../../features/auth/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import HamburgerMenu from "./components/HamburgerMenu";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import ProfileDropdown from "./components/ProfileDropdown";
import CategoriesDropdown from "./components/CategoriesDropdown";

const Nav = () => {
  const { username } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-white w-full shadow hover:shadow-md fixed top-0 transition-shadow">
      <div className="container mx-auto py-5 flex justify-between">
        <Link to="/">Home</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/">Newest</Link>
          <DropdownMenu name="Categories" children={<CategoriesDropdown />} />
          {!username && <button onClick={handleLogin}>Login</button>}
          {username && (
            <DropdownMenu name={username} children={<ProfileDropdown />} />
          )}
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
