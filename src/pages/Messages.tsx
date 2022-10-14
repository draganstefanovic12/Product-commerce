import { useUser } from "../features/user/context/UserContext";
import { useParams } from "react-router-dom";
import { MessageRoom } from "../features/messages/types/types";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Container from "../components/Container";
import SendMessage from "../features/messages/components/SendMessage";
import MessageRooms from "../features/messages/components/MessageRooms";
import HelmetPageTitle from "../components/HelmetPageTitle/HelmetPageTitle";
import ReceivedMessages from "../features/messages/components/ReceivedMessages";

const Messages = () => {
  const { user } = useUser();
  const { receipent } = useParams();
  const socket = io("https://dragpersonalproj.xyz/product-commerce");
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
    <Container className="messages-height mr-4">
      <HelmetPageTitle title="Messages" />
      <div className="grid grid-cols-profile w-full">
        <MessageRooms {...props} />
        <div className="w-full flex-col flex messages-height justify-between">
          {rooms.length === 0 && (
            <p className="self-center pt-5 text-gray-400">
              You have no messages.
            </p>
          )}
          {rooms.length > 0 && <ReceivedMessages {...props} />}
          {selectedRoom && <SendMessage {...props} />}
        </div>
      </div>
    </Container>
  );
};

export default Messages;
