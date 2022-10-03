import io from "socket.io-client";
import Container from "../components/Container";
import { useAuth } from "../features/auth/context/AuthContext";
import { useEffect, useState } from "react";

const Messages = () => {
  //can do this by sending out the username, finding a user document to get the _id
  //the only other thing thats needed is the other user id, create a room on "Send Message" click
  //first user gets a room on creation, second user gets a room on message received
  //add a block user option
  const { username, user } = useAuth();
  const socket = io("http://localhost:5006");
  const [value, setValue] = useState("");

  const handleSendMessage = () => {
    socket.emit("message", value);
  };

  useEffect(() => {}, [socket]);

  //need to fetch current user data
  return (
    <Container>
      <div className="grid grid-cols-profile h-screen">
        <div className="border-r-2 border-gray-100 border-solid">
          user rooms
        </div>
        <div className="">user messages</div>
      </div>
    </Container>
  );
};

export default Messages;
