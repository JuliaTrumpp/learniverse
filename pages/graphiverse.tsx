import dynamic from "next/dynamic";
import InfoTag from "@/components/InfoTag/InfoTag";
import styles from "@/pages/graphiverse.module.css";
import { useThemeContext } from "@/context/ThemeContext";

const Plotter = dynamic(() => import("@/components/Plotter/Plotter"), {
  ssr: false,
  loading: () => <h2>Lade Plotter...</h2>,
});

export default function Graphiverse() {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.darkMode : styles.lightMode
      }`}
    >
      <div className={styles.stageContainer}>
        <InfoTag text={"Deine Lernplattform für die HSRM"} />
        <h1
          className={`${styles.h1} ${
            theme === "light" ? styles.lightModeh1 : styles.darkModeh1
          }`}
        >
          {"Das Learniverse Graphtool"}
        </h1>
        <h2
          className={`${styles.h2} ${
            theme === "light" ? styles.lightModeh2 : styles.darkModeh2
          }`}
        >
          {
            "Mit unserem neuen Graphtool alle deine komplexen mathematischen Formeln greifbar machen! "
          }
        </h2>
      </div>
      <Plotter xRange={[-10, 10]} />
    </div>
  );
}
