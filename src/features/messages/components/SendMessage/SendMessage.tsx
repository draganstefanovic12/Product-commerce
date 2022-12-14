import { Socket } from "socket.io-client";
import { useUser } from "../../../user/context/UserContext";
import { useState } from "react";
import { MessageRoom } from "../../types";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";

type Props = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  selectedRoom: MessageRoom | null | undefined;
  setRooms: React.Dispatch<React.SetStateAction<MessageRoom[]>>;
};

const SendMessage = ({ socket, selectedRoom, setRooms }: Props) => {
  const { user } = useUser();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" && handleSendMessage();
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
                read: true,
                createdAt: new Date().toString(),
              },
            ],
          };
        } else {
          return rooms;
        }
      })
    );
  };

  return (
    <div className="flex w-full self-end">
      <Input
        placeholder="Type message here..."
        value={value}
        className="input-field h-16 w-full flex flex-1 rounded-r-none focus:ring-0"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button type="submit" onClick={handleSendMessage} className="h-16 w-20 rounded-l-none">
        Send
      </Button>
    </div>
  );
};

export default SendMessage;
