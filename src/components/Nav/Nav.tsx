import { Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full shadow hover:shadow-md transition-shadow">
      <div className="container mx-auto py-5 flex justify-between">
        <h1>Placeholder name</h1>
        <div className="hidden md:flex space-x-6">
          <Link to="/">placeholder</Link>
          <Link to="/">placeholder</Link>
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};

export default Nav;
