import { useThemeContext } from "@/context/ThemeContext";
import styles from "@/pages/404.module.css";
import CTAButton from "@/components/CTAButton/CTAButton";

export default function Errorpage404() {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${styles.container} ${
        theme === "dark"
          ? styles.backgroundDarkmode
          : styles.backgroundLightmode
      }`}
    >
      <div className={`${styles.content} section-spacing-lr`}>
        <h3
          className={`${theme === "dark" ? styles.darkMode : styles.lightMode}`}
        >
          404 - Seite nicht gefunden
        </h3>
        <h1
          className={`${theme === "dark" ? styles.darkMode : styles.lightMode}`}
        >
          Sorry, diese Seite existiert leider nicht...
        </h1>
        <div className={styles.homeButton}>
          <CTAButton text="Zur Startseite" link="/" />
        </div>
      </div>
    </div>
  );
}
