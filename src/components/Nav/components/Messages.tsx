import { useUser } from "../../../features/user/context/UserContext";
import { useNavigate } from "react-router-dom";
import messages from "../../../assets/images/messages.svg";

const Messages = () => {
  const { unreadMessages } = useUser();
  const navigate = useNavigate();

  const handleMessages = () => {
    navigate("/messages");
  };

  return (
    <div className="relative">
      <img onClick={handleMessages} src={messages} className="h-6" alt="msg" />
      {unreadMessages! > 0 && (
        <p className="absolute bottom-3 rounded-xl -right-1 text-red-800 bg-white text-sm h-4">
          {unreadMessages}
        </p>
      )}
    </div>
  );
};

export default Messages;
