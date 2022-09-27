import { Link } from "react-router-dom";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState("hidden");
  const [stroke, setStroke] = useState("currentColor");

  const handleShowMenu = (): void => {
    setIsOpen(isOpen === "hidden" ? "flex" : "hidden");
    setStroke(stroke === "#fff" ? "currentColor" : "#fff");
  };

  return (
    <>
      <svg
        onClick={handleShowMenu}
        fill="none"
        className="md:hidden sm:block space-y-1 w-6 z-10 relative"
        viewBox="0 0 24 24"
        stroke={stroke}
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <ul
        className={`${isOpen} flex-col absolute top-0 left-0 w-full bg-blue-500 p-10 space-y-5 text-white text-center`}
      >
        <Link to="/">placeholder</Link>
        <Link to="/">placeholder</Link>
      </ul>
    </>
  );
};

export default HamburgerMenu;
