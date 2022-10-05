export type Message = {
  content: string;
  from: string;
};

export type MessageRoom = {
  room: string | undefined;
  messages: Message[];
};
