import React, { useContext, useCallback } from "react";
import styles from "@/components/Chat/Chat.module.css";
import ChatMessage from "@/components/Chat/ChatMessage/ChatMessage";
import { MessageContext } from "@/context/MessageContext";
import { useThemeContext } from "@/context/ThemeContext";
import Groq from "groq-sdk";
import DeleteIcon from "@/public/Icons/delete.svg";
import CloseIcon from "@/public/Icons/close.svg";
import SendIcon from "@/public/Icons/send.svg";
import ChatbotIconLightmode from "@/public/Icons/chatbot-lm.svg";
import ChatbotIconDarkmode from "@/public/Icons/chatbot-dm.svg";

interface ChatProps {
  onClose: () => void;
  onDelete: () => void;
}

const renderChatbotIcon = (theme: string, who: string) => {
  if (who === "user") return null;

  return (
    <div className={styles.chatbotIconContainer}>
      {theme === "light" ? (
        <ChatbotIconLightmode className={styles.chatbotIcon} />
      ) : (
        <ChatbotIconDarkmode className={styles.chatbotIcon} />
      )}
    </div>
  );
};

const Chat: React.FC<ChatProps> = ({ onClose, onDelete }) => {
  const { messages, addMessage } = useContext(MessageContext);
  const { theme } = useThemeContext();

  if (!messages || !addMessage) {
    return null;
  }

  const handleSendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) {
        return;
      }
      console.log(`Sending message: ${text} as user`);
      addMessage({ text, who: "user" });
      try {
        const chatCompletion = await getGroqChatCompletion(text);
        const botMessage = chatCompletion.choices[0]?.message?.content || "";
        console.log(`Received bot message: ${botMessage}`);
        addMessage({ text: botMessage, who: "bot" });
      } catch (error) {
        console.error("Error sending message:", error);
        addMessage({
          text: "Sorry, there was an error. Please try again later.",
          who: "bot",
        });
      }
    },
    [addMessage]
  );

  const getGroqChatCompletion = async (text: string) => {
    const groq = new Groq({
      apiKey: process.env.NEXT_PUBLIC_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    return groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: text,
        },
      ],
      model: "llama3-8b-8192",
    });
  };

  return (
    <div
      className={`${theme === "light" ? styles.light : styles.dark} ${
        styles.container
      }`}
      id="chat"
    >
      <div className={styles.chatHeader}>
        <p className={styles.chatTitle}>LEARNIVERSE CHAT</p>
        <div className={styles.chatButtons}>
          <button onClick={onDelete} className={styles.deleteButton}>
            <DeleteIcon className={styles.buttonIcon} />
          </button>
          <button onClick={onClose} className={styles.closeButton}>
            <CloseIcon className={styles.buttonIcon} />
          </button>
        </div>
      </div>
      <div className={`${styles.messagesContainer} tagline-regular`}>
        {messages.map((message, index) => (
          <span
            key={index}
            className={`${
              message.who === "user" ? styles.userMessage : styles.botMessage
            }`}
          >
            <div className={`${styles.iconAndMessageContainer}`}>
              <div className={`${styles.botIcon}`}>
                {renderChatbotIcon(theme, message.who)}
              </div>
              <ChatMessage text={message.text} />
            </div>
          </span>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={`${styles.inputField} tagline-regular`}
          placeholder="Schreibe deine Nachricht..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const inputElement = e.currentTarget;
              const message = inputElement.value.trim();
              if (message) {
                handleSendMessage(message);
                inputElement.value = "";
              }
            }
          }}
        />
        <button
          data-testid="send"
          onClick={() => {
            const inputElement = document.querySelector(
              `.${styles.inputField}`
            ) as HTMLInputElement;
            if (inputElement) {
              const message = inputElement.value.trim();
              if (message) {
                handleSendMessage(message);
                inputElement.value = "";
              }
            }
          }}
          className={styles.sendButton}
        >
          <SendIcon className={styles.buttonIcon} />
        </button>
      </div>
    </div>
  );
};

export default React.memo(Chat);
