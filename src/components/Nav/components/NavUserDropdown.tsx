import { useAuth } from "../../../features/auth/context/AuthContext";
import { useState } from "react";
import { useLogout } from "../../../features/auth/hooks/useLogout";
import { useNavigate } from "react-router-dom";

const NavUserDropdown = () => {
  const { logout } = useLogout();
  const { username } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSettings = () => {
    navigate("/settings");
    setIsOpen(false);
  };

  const handleProfile = () => {
    navigate(`/profile/${username}`);
    setIsOpen(false);
  };

  return (
    <div
      onMouseLeave={handleClose}
      onMouseEnter={handleOpen}
      className="z-10 relative cursor-pointer"
    >
      {username}
      {isOpen && (
        <ul className="absolute child:text-sm bg-white child:p-2 child-hover:bg-slate-50 shadow">
          <li onClick={handleProfile}>Profile</li>
          <li onClick={handleSettings}>Settings</li>
          <li onClick={logout}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default NavUserDropdown;
