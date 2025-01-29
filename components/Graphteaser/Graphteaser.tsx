import styles from "@/components/Graphteaser/Graphteaser.module.css";
import CTAButton from "@/components/CTAButton/CTAButton";
import { useThemeContext } from "@/context/ThemeContext";

export default function Graphteaser() {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${styles.container} section-spacing-lr  
    ${theme === "light" ? styles.light : styles.dark}
      `}
      id="graphiverse"
    >
      <h1 className={`${styles.h1}`}> Learniverse hat einen Plot-Twist</h1>
      <p className={`${styles.p}`}>
        {" "}
        Mit unserem neuen Graphtool alle deine komplexen mathematischen Formeln
        greifbar machen!
      </p>
      <CTAButton text="Bring mich hin" link="/graphiverse" />
    </div>
  );
}
