import { Socket } from "socket.io-client";
import { useUser } from "../../../user/context/UserContext";
import { MessageRoom } from "../../types";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { useCallback, useEffect } from "react";

type RoomProps = {
  selectedRoom: MessageRoom | null | undefined;
  setSelectedRoom: React.Dispatch<React.SetStateAction<MessageRoom | null | undefined>>;
  receipent: string | undefined;
  setRooms: React.Dispatch<React.SetStateAction<MessageRoom[]>>;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  rooms: MessageRoom[];
};

const MessageRooms = (props: RoomProps) => {
  const { user, setUnreadMessages } = useUser();
  const { selectedRoom, setSelectedRoom, rooms, setRooms, receipent, socket } = props;

  const handleReadMessages = (room: MessageRoom) => {
    socket.emit("read_message", { user: user?.username, room: room.room });
    setUnreadMessages((currUnread) => currUnread - room.messages.filter((msg) => !msg.read).length);
    setSelectedRoom(room);
  };

  const handleRooms = useCallback(() => {
    const checker = user?.messages.find((currRooms: MessageRoom) => currRooms.room === receipent);
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
    <ul className="border-r-2 border-gray-100 messages-height border-solid">
      {rooms.map((rooms: MessageRoom, i: number) => (
        <li
          className={
            rooms.room === selectedRoom?.room
              ? "p-5 shadow cursor-pointer bg-gray-50"
              : "p-5 shadow cursor-pointer"
          }
          key={i}
          onClick={() => handleReadMessages(rooms)}
        >
          <p>{rooms.room}</p>
          <div className="flex justify-between items-end">
            <span
              className={` text-sm whitespace-nowrap overflow-hidden overflow-ellipsis ${
                rooms.messages.at(-1)?.read ? "text-gray-500" : "text-black font-bold"
              }`}
            >
              {rooms.messages.at(-1)?.content}
            </span>
            <span className="text-secondary">{rooms.messages.at(-1)?.createdAt.slice(16, 21)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MessageRooms;
