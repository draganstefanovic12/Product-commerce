import { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState("hidden");
  const [stroke, setStroke] = useState("currentColor");

  const handleShowMenu = (): void => {
    setShowMenu(showMenu === "hidden" ? "flex" : "hidden");
    setStroke(stroke === "#fff" ? "currentColor" : "#fff");
  };

  return (
    <>
      <svg
        onClick={handleShowMenu}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="md:hidden sm:block space-y-1 w-6 z-10 relative"
        viewBox="0 0 24 24"
        stroke={stroke}
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <ul
        className={`${showMenu} flex-col absolute top-0 left-0 w-full bg-blue-500 p-10 space-y-5 text-white text-center`}
      >
        <Link to="/">e</Link>
        <Link to="/">eee</Link>
      </ul>
    </>
  );
};

export default HamburgerMenu;
