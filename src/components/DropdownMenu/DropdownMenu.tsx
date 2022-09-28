import { useAuth } from "../../features/auth/context/AuthContext";
import { useState } from "react";

type DropdownProps = {
  children: JSX.Element;
};

const DropdownMenu = ({ children }: DropdownProps) => {
  const { username } = useAuth();
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
        {username}
        {isOpen && children}
      </>
    </div>
  );
};

export default DropdownMenu;
