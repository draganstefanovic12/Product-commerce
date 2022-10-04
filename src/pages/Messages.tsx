import io from "socket.io-client";
import Container from "../components/Container";
import { useAuth } from "../features/auth/context/AuthContext";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";

type MessageRoom = {
  room: string | undefined;
  messages: Message[];
};

type Message = {
  content: string;
  sentBy: string;
};

const Messages = () => {
  const { user } = useAuth();
  const { receipent } = useParams();
  const socket = io("http://localhost:5006");
  const [value, setValue] = useState("");
  const [rooms, setRooms] = useState<MessageRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<MessageRoom | null>();

  const handleChangeRoom = (room: MessageRoom) => {
    setSelectedRoom(room);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSendMessage = () => {
    socket.emit("send_message", {
      content: value,
      to: receipent,
      sending: user?._id,
    });
    setValue("");
  };

  useEffect(() => {
    user?.messages &&
      setRooms((currRooms) => [...currRooms, ...user?.messages!]);
  }, [user?.messages]);

  useEffect(() => {
    setSelectedRoom({ room: receipent, messages: [] });
    setRooms((currRooms) => [{ room: receipent, messages: [] }]);
  }, [receipent]);

  return (
    <Container>
      <div className="grid grid-cols-profile w-full">
        <ul className="border-r-2 border-gray-100 h-screen border-solid">
          {rooms.map((rooms: MessageRoom, i) => (
            <li
              className="p-5 shadow"
              key={i}
              onClick={() => handleChangeRoom(rooms)}
            >
              {rooms.room}
            </li>
          ))}
        </ul>
        <div className="w-full flex h-screen">
          {selectedRoom?.messages.map((message, i) => (
            <li key={i}>{message.content}</li>
          ))}
          <div className="flex w-full mb-16">
            <input
              placeholder="Type message here..."
              value={value}
              className="input-field h-16 w-full self-end rounded-r-none"
              onChange={handleChange}
            />
            <Button
              onClick={handleSendMessage}
              className="h-16 self-end w-28 rounded-l-none"
            >
              Send message
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Messages;
