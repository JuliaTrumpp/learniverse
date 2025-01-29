import styles from "./ChatMessage.module.css";

interface ChatMessageProps {
  text: string;
}

export default function ChatMessage({ text }: ChatMessageProps) {
  return <span className={`${styles.message} tagline-regular`}>{text}</span>;
}
