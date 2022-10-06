import { useAuth } from "../features/auth/context/AuthContext";
import { useParams } from "react-router-dom";
import { MessageRoom } from "../features/messages/types/types";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Container from "../components/Container";
import SendMessage from "../features/messages/components/SendMessage";
import ReceivedMessages from "../features/messages/components/ReceivedMessages";
import MessageRooms from "../features/messages/components/MessageRooms";

const Messages = () => {
  const { user } = useAuth();
  const { receipent } = useParams();
  const socket = io("http://localhost:5006");
  const [rooms, setRooms] = useState<MessageRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<MessageRoom | null>();

  (() => {
    socket.emit(
      "join_rooms",
      user?.messages.map((room: MessageRoom) => `${room.room}${user?.username}`)
    );
  })();

  //on new message it should smooth scroll to the bottom to keep it readable.
  //make only 50 messages load unless requested for more
  //try to figure out how to add "..is typing"

  const liRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (liRef && liRef.current) {
      liRef.current.scrollIntoView();
    }
  }, [selectedRoom]);

  //destructuring props to pass to all components to split up the code a bit to make it more readable
  const props = {
    receipent: receipent,
    rooms: rooms,
    selectedRoom: selectedRoom,
    setRooms: setRooms,
    setSelectedRoom: setSelectedRoom,
    socket: socket,
    liRef: liRef,
  };

  return (
    <Container className="messages-height">
      <div className="grid grid-cols-profile w-full">
        <MessageRooms {...props} />
        <div className="w-full flex-col flex messages-height justify-between">
          <ReceivedMessages {...props} />
          {selectedRoom && <SendMessage {...props} />}
        </div>
      </div>
    </Container>
  );
};

export default Messages;
