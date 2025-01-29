import styles from "@/components/CTAButton/CTAButton.module.css";

interface CTAButtonProps {
  text: string;
  link: string;
}

const handleClick = (link: string) => {
  window.location.href = link;
};

export function CTAButton({ text, link }: CTAButtonProps) {
  return (
    <button
      type="button"
      className={`${styles.container} button-medium`}
      onClick={() => handleClick(link)}
    >
      <span className="button-medium">{text}</span>
    </button>
  );
}

export default CTAButton;
