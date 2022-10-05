import { useAuth } from "../features/auth/context/AuthContext";
import { useParams } from "react-router-dom";
import { MessageRoom } from "../features/messages/types/types";
import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Container from "../components/Container";
import SendMessage from "../features/messages/components/SendMessage";

const Messages = () => {
  const { user } = useAuth();
  const { receipent } = useParams();
  const socket = io("http://localhost:5006");
  const [rooms, setRooms] = useState<MessageRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<MessageRoom | null>();

  const handleChangeRoom = (room: MessageRoom) => {
    setSelectedRoom(room);
    socket.emit("join_room", { room: room.room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      //data is an object that contains {room: roomname, content: msg content, sender: whosent}

      divRef.current!.scrollIntoView({ behavior: "smooth" });
    });
  }, [rooms, socket]);

  useEffect(() => {
    //Checks if the room already exists with the user id in params
    //then sets the current room if it does
    //if it doesnt, it creates a new room state and places it first
    const checker = user?.messages.find(
      (currRooms: MessageRoom) => currRooms.room === receipent
    );
    user?.messages &&
      setSelectedRoom(checker ? checker : { room: receipent, messages: [] });
    user?.messages &&
      setRooms(
        receipent
          ? checker
            ? user?.messages!
            : [{ room: receipent, messages: [] }, ...user?.messages!]
          : user?.messages
      );
  }, [receipent, user?.messages]);

  const divRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <div className="grid grid-cols-profile w-full">
        <ul className="border-r-2 border-gray-100 h-screen border-solid">
          {rooms.map((rooms: MessageRoom, i) => (
            <li
              className={
                rooms.room === selectedRoom?.room
                  ? "p-5 shadow cursor-pointer bg-gray-50"
                  : "p-5 shadow cursor-pointer"
              }
              key={i}
              onClick={() => handleChangeRoom(rooms)}
            >
              <p>{rooms.room}</p>
              <span className="text-gray-500 text-sm whitespace-nowrap overflow-hidden overflow-ellipsis">
                {rooms.messages.at(-1)?.content}
              </span>
            </li>
          ))}
        </ul>
        <div className="w-full h-screen flex-col flex justify-between">
          <ul className="p-4 flex flex-col gap-1 overflow-auto">
            {selectedRoom?.messages.map((message, i) =>
              message.from !== selectedRoom.room ? (
                <li
                  className="h-10 shadow rounded w-max items-center flex p-2"
                  key={i}
                >
                  {message.content}
                </li>
              ) : (
                <li
                  className="h-10 shadow rounded w-max items-center flex p-2 self-end"
                  key={i}
                >
                  {message.content}
                </li>
              )
            )}
          </ul>
          {selectedRoom && (
            <SendMessage
              divRef={divRef}
              selectedRoom={selectedRoom}
              setSelectedRoom={setSelectedRoom}
              socket={socket}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Messages;
