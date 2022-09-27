import { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const [showMenu, setShowMenu] = useState(false);

  const handleHover = () => {
    setShowMenu(true);
  };

  const handleStopHover = () => {
    setShowMenu(false);
  };

  const handleSettings = () => {
    navigate("/settings");
    setShowMenu(false);
  };

  return (
    <div
      onMouseLeave={handleStopHover}
      onMouseEnter={handleHover}
      className="z-10 relative cursor-pointer"
    >
      Profile
      {showMenu && (
        <ul className="absolute child:text-sm bg-white child:p-2 child-hover:bg-slate-50 shadow">
          <li onClick={handleSettings}>Settings</li>
          <li onClick={logout}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default ProfileMenu;
