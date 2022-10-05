import Button from "../../../../components/Button";
import { Socket } from "socket.io-client";
import { useAuth } from "../../../auth/context/AuthContext";
import { useState } from "react";
import { MessageRoom } from "../../types";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

type Props = {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  selectedRoom: MessageRoom;
  setSelectedRoom: React.Dispatch<
    React.SetStateAction<MessageRoom | null | undefined>
  >;
  divRef: React.RefObject<HTMLDivElement>;
};

const SendMessage = ({
  socket,
  selectedRoom,
  setSelectedRoom,
  divRef,
}: Props) => {
  const [value, setValue] = useState("");
  const { user } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSendMessage = () => {
    socket.emit("send_message", {
      content: value,
      to: selectedRoom?.room,
      sending: user?._id,
    });
    setValue("");
    //appends the message to the room
    setSelectedRoom({
      room: selectedRoom?.room,
      messages: [
        ...selectedRoom?.messages!,
        { content: value, from: user?.username! },
      ],
    });
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
