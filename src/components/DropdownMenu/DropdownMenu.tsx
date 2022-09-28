import { useState } from "react";

type DropdownProps = {
  children: JSX.Element;
  name: string;
};

const DropdownMenu = ({ children, name }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      onMouseLeave={handleClose}
      onMouseEnter={handleOpen}
      className="z-10 relative cursor-pointer"
    >
      <>
        {name}
        {isOpen && children}
      </>
    </div>
  );
};

export default DropdownMenu;
