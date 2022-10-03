import io from "socket.io-client";
import Container from "../components/Container";
import { useAuth } from "../features/auth/context/AuthContext";
import { useEffect, useState } from "react";

const Messages = () => {
  //need user id to create a special room ?
  //can do this by sending out the username, finding a user document to get the _id
  //the only other thing thats needed is the other user id, create a room on "Send Message" click
  //first user gets a room on creation, second user gets a room on message received
  //add a block user option
  const { username } = useAuth();
  const socket = io("http://localhost:5006");
  const [value, setValue] = useState("");

  //sending the message
  const handleSendMessage = () => {
    socket.emit("message", value);
  };

  //use effect to follow the socket changes
  useEffect(() => {
    // socket.on("message", (msg) => console.log(msg));
  }, [socket]);

  console.log(socket);
  //need to fetch current user data
  //make this into a 20%/80% grid to display chatrooms/messages
  return (
    <Container>
      <div>
        <div>{/* list of chatroom */}</div>
        <div>{/* messages */}</div>
        <input onChange={handleSendMessage} />
      </div>
    </Container>
  );
};

export default Messages;
