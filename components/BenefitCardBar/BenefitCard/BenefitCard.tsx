import styles from "./BenefitCard.module.css";
import PLATTFORM from "@/public/Icons/plattform.svg";
import FREE from "@/public/Icons/free.svg";
import STUDENT from "@/public/Icons/student.svg";
import { useThemeContext } from "@/context/ThemeContext";

interface BenefitCardProps {
  headline: string;
  text: string;
  cardType: string;
  style: React.CSSProperties;
}

function BenefitCard({ headline, text, cardType, style }: BenefitCardProps) {
  const { theme } = useThemeContext();
  let icon = null;

  switch (cardType) {
    case "card1":
      icon = <PLATTFORM alt="Icon" />;
      break;
    case "card2":
      icon = <FREE alt="Icon" />;
      break;
    case "card3":
      icon = <STUDENT alt="Icon" />;
      break;
    default:
      icon = null;
  }

  return (
    <div
      className={`${theme === "light" ? styles.lightMode : styles.darkMode} ${
        styles.benefitCard
      } ${styles[cardType]}`}
      style={style}
    >
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.textContent}>
        <h3 className="no-margin">{headline}</h3>
        <p className={`${styles.textCardText} no-margin`}>{text}</p>
      </div>
    </div>
  );
}

export default BenefitCard;
