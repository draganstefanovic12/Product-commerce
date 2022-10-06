import { Socket } from "socket.io-client";
import { useAuth } from "../../../auth/context/AuthContext";
import { MessageRoom } from "../../types";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { useCallback, useEffect } from "react";

type RoomProps = {
  selectedRoom: MessageRoom | null | undefined;
  setSelectedRoom: React.Dispatch<
    React.SetStateAction<MessageRoom | null | undefined>
  >;
  receipent: string | undefined;
  setRooms: React.Dispatch<React.SetStateAction<MessageRoom[]>>;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  rooms: MessageRoom[];
};

const MessageRooms = ({
  selectedRoom,
  setSelectedRoom,
  receipent,
  rooms,
  setRooms,
  socket,
}: RoomProps) => {
  const { user } = useAuth();

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
  }, [receipent, setRooms, user?.messages]);

  useEffect(() => {
    handleRooms();
  }, [handleRooms]);

  return (
    <ul className="border-r-2 border-gray-100 h-screen border-solid">
      {rooms.map((rooms: MessageRoom, i: number) => (
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
  );
};

export default MessageRooms;
