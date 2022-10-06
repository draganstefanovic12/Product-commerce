export type Message = {
  content: string;
  from: string;
  createdAt: string;
  read: boolean;
};

export type MessageRoom = {
  room: string | undefined;
  messages: Message[];
  createdAt?: string;
  read?: boolean;
};
