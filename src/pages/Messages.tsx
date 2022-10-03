import io from "socket.io-client";
import Container from "../components/Container";
import { useEffect, useState } from "react";

const Messages = () => {
  const socket = io("http://localhost:5006");
  const [value, setValue] = useState("");

  const handleSendMessage = () => {
    socket.emit("message", value);
  };

  useEffect(() => {
    socket.on("message", (msg) => console.log(msg));
  }, [socket]);

  console.log(socket);
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
