import styles from "./ModuleCardsContainer.module.css";
import { useThemeContext } from "@/context/ThemeContext";
import ModuleCardsSlider from "./ModuleCardsSlider";

function ModuleCardsContainer() {
  const { theme } = useThemeContext();

  return (
    <div id="modules" className={styles.module} style={{ padding: "0px" }}>
      <div className={styles.infoText}>
        <h2
          className={
            theme === "light" ? styles.lightMode_h2 : styles.darkMode_h2
          }
        >
          Deine Module im Überblick
        </h2>
        <p
          className={theme === "light" ? styles.lightMode_p : styles.darkMode_p}
        >
          Alle Module, die du für dein Studium brauchst. Hier findest du alle
          Inhalte, Kapitel, Lernvideos und sonstige Inhalte, die dich durch
          deine Prüfung bringen. Siehe direkt, welche Module du vorher
          abgeschlossen haben solltest, damit es dir hier leichter fällt!
        </p>
      </div>
      <ModuleCardsSlider />
    </div>
  );
}

export default ModuleCardsContainer;
