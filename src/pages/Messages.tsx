import { useAuth } from "../features/auth/context/AuthContext";
import { useParams } from "react-router-dom";
import { MessageRoom } from "../features/messages/types/types";
import { useCallback, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import Container from "../components/Container";
import SendMessage from "../features/messages/components/SendMessage";
import ReceiveMessage from "../features/messages/components/ReceiveMessage";

const Messages = () => {
  const { user } = useAuth();
  const { receipent } = useParams();
  const socket = io("http://localhost:5006");
  const [rooms, setRooms] = useState<MessageRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<MessageRoom | null>();

  const handleChangeRoom = (room: MessageRoom) => {
    setSelectedRoom({
      ...room,
      messages: room.messages.map((msg) => {
        if (!msg.read) {
          return { ...msg, read: true };
        } else {
          return msg;
        }
      }),
    });
    socket.emit("read_message", { user: user?.username, room: room.room });
  };

  const handleRooms = useCallback(() => {
    const checker = user?.messages.find(
      (currRooms: MessageRoom) => currRooms.room === receipent
    );
    user?.messages &&
      setRooms(
        receipent
          ? checker
            ? user?.messages!
            : [{ room: receipent, messages: [] }, ...user?.messages!]
          : user?.messages
      );
  }, [receipent, user?.messages]);

  useEffect(() => {
    handleRooms();
  }, [handleRooms]);

  (() => {
    socket.emit(
      "join_rooms",
      user?.messages.map((room: MessageRoom) => `${room.room}${user?.username}`)
    );
  })();

  //also fix the layout and make the bottom not scrollable.
  //on new message it should smooth scroll to the bottom to keep it readable.
  //make only 50 messages load unless requested for more
  //try to figure out how to add "..is typing"

  useEffect(() => {
    socket.on("receive_message", async (data) => {
      if (data.from === user?.username) return;

      const exists = rooms.find((room: MessageRoom) => room.room === data.from);
      if (exists) {
        setRooms(
          rooms.map((room: MessageRoom) => {
            if (room.room === data.from) {
              return { ...room, messages: [...room.messages, data] };
            } else {
              return room;
            }
          })
        );
      } else {
        setRooms([{ room: data.from, messages: [data] }, ...rooms]);
      }
      divRef.current!.scrollIntoView({ behavior: "smooth" });
    });
    //cleanup function for socket io so it doesn't render multiple times
    setSelectedRoom(
      rooms.find((currRooms) => currRooms.room === selectedRoom?.room)
    );
    return () => {
      socket.off("receive_message");
    };
  }, [handleRooms, rooms, selectedRoom?.room, socket, user?.username]);

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
          <ReceiveMessage selectedRoom={selectedRoom} />
          {selectedRoom && (
            <SendMessage
              divRef={divRef}
              selectedRoom={selectedRoom}
              setRooms={setRooms}
              socket={socket}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default Messages;
