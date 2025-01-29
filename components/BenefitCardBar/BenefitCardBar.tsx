import BenefitCard from "./BenefitCard/BenefitCard";
import styles from "./BenefitCardBar.module.css";
import { useThemeContext } from "@/context/ThemeContext";

function BenefitCardBar() {
  const { theme } = useThemeContext();

  return (
    <div className={styles.benefitCardsContainer}>
      <BenefitCard
        headline="Eine Plattform"
        text="Keine Vielzahl an Seiten, Videos oder anderen Quellen. Bei Learniverse findest du alle Inhalte auf dein Studium zugeschnitten."
        cardType="card1"
        style={{ backgroundColor: theme === "light" ? "#0000FE" : "#0C1E39" }}
      />
      <BenefitCard
        headline="Komplett kostenfrei"
        text="Das komplette Wissen zu allen Modulen findest du immer komplett ohne Werbung, Subscription oder sonstigen versteckte Kosten."
        cardType="card2"
        style={{ backgroundColor: theme === "light" ? "#1C74FC" : "#1E3453" }}
      />
      <BenefitCard
        headline="Zielgerichtete Inhalte"
        text="Ob Klausur, mündliche Prüfung oder Studienleistung. Durch die Inhalte von Kommilitonen und Tutoren, sind die Inhalte auf deinen Erfolg gerichtet!"
        cardType="card3"
        style={{ backgroundColor: theme === "light" ? "#25AEBB" : "#3E4F6A" }}
      />
    </div>
  );
}

export default BenefitCardBar;
