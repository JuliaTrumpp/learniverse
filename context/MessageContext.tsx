import { createContext, useState, useEffect } from "react";

interface Message {
  text: string;
  who: string;
}

interface MessageContextData {
  messages: Message[];
  addMessage: (message: Message) => void;
  deleteSendMessages: () => void;
}

export const MessageContext = createContext<MessageContextData>({
  messages: [],
  addMessage: () => {},
  deleteSendMessages: () => {},
});

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  const addMessage = (message: Message) => {
    setMessages((prevMessages) => {
      const updatedMessages = [message, ...prevMessages];
      localStorage.setItem("messages", JSON.stringify(updatedMessages));
      return updatedMessages;
    });
  };

  const deleteSendMessages = () => {
    localStorage.removeItem("messages");
    setMessages([]);
  };

  return (
    <MessageContext.Provider
      value={{ messages, addMessage, deleteSendMessages }}
    >
      {children}
    </MessageContext.Provider>
  );
};
