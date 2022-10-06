import { MessageRoom } from "../../types";

type ReceiveProps = {
  selectedRoom: MessageRoom | null | undefined;
};

const ReceivedMessages = ({ selectedRoom }: ReceiveProps) => {
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
