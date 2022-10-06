import { Socket } from "socket.io-client";
import { useAuth } from "../../../auth/context/AuthContext";
import { useEffect } from "react";
import { MessageRoom } from "../../types";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

type ReceiveProps = {
  selectedRoom: MessageRoom | null | undefined;
  setSelectedRoom: React.Dispatch<
    React.SetStateAction<MessageRoom | null | undefined>
  >;
  rooms: MessageRoom[];
  setRooms: React.Dispatch<React.SetStateAction<MessageRoom[]>>;
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
};

const ReceivedMessages = ({
  selectedRoom,
  socket,
  setSelectedRoom,
  rooms,
  setRooms,
}: ReceiveProps) => {
  const { user } = useAuth();

  useEffect(() => {
    socket.on("receive_message", async (data) => {
      if (data.from === user?.username) return;

      const updateRoom = rooms.map((room: MessageRoom) => {
        if (room.room === data.from) {
          return { ...room, messages: [...room.messages, data] };
        } else {
          return room;
        }
      });
      setRooms(updateRoom);
    });

    //updates the current room with new messages
    setSelectedRoom(
      rooms.find((currRooms) => currRooms.room === selectedRoom?.room)
    );

    //cleanup function for socket io so it doesn't render multiple times
    return () => {
      socket.off("receive_message", setSelectedRoom);
    };
  }, [
    rooms,
    selectedRoom?.room,
    setRooms,
    setSelectedRoom,
    socket,
    user?.username,
  ]);

  return (
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
  );
};

export default ReceivedMessages;
