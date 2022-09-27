import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "../ProfileMenu";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const { username } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-white w-full shadow hover:shadow-md fixed top-0 transition-shadow">
      <div className="container mx-auto py-5 flex justify-between">
        <Link to="/">Placeholder name</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/">placeholder</Link>
          <Link to="/">placeholder</Link>
          {!username && <button onClick={handleLogin}>Login</button>}
          {username && <ProfileMenu />}
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
