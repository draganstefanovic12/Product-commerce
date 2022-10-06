import Button from "../../../../components/Button";
import { Socket } from "socket.io-client";
import { useAuth } from "../../../auth/context/AuthContext";
import { useState } from "react";
import { MessageRoom } from "../../types";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

type Props = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  selectedRoom: MessageRoom;
  setRooms: React.Dispatch<React.SetStateAction<MessageRoom[]>>;
  divRef: React.RefObject<HTMLDivElement>;
};

const SendMessage = ({ socket, selectedRoom, setRooms, divRef }: Props) => {
  const [value, setValue] = useState("");
  const { user } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSendMessage = () => {
    socket.emit("send_message", {
      content: value,
      to: selectedRoom?.room,
      sending: user?.username,
    });
    setValue("");
    setRooms((currRooms) =>
      currRooms.map((rooms: MessageRoom) => {
        if (rooms.room === selectedRoom?.room) {
          return {
            ...rooms,
            messages: [
              ...rooms.messages,
              {
                content: value,
                from: user?.username!,
                read: false,
                createdAt: new Date().toString(),
              },
            ],
          };
        } else {
          return rooms;
        }
      })
    );
    //appends the message to the room
  };

  return (
    <div ref={divRef} className="flex w-full mb-16 self-end">
      <textarea
        placeholder="Type message here..."
        value={value}
        className="input-field h-16 w-full rounded-r-none"
        onChange={handleChange}
      />
      <Button onClick={handleSendMessage} className="h-16 w-20 rounded-l-none">
        Send
      </Button>
    </div>
  );
};

export default SendMessage;
