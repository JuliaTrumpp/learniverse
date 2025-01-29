import Graphteaser from "@/components/Graphteaser/Graphteaser";
import { FormAndImage } from "@/components/Formular/FormAndImage";
import ModuleCardsContainer from "@/components/ModuleCardSlider/ModuleCardsContainer";
import { useThemeContext } from "@/context/ThemeContext";
import styles from "@/pages/index.module.css";
import StageText from "@/components/StageText/StageText";
import React from "react";

export default function Home() {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.containerDark : styles.containerLight
      }`}
    >
      <div
        className={`${styles.backgroundImage} ${
          theme === "dark"
            ? styles.backgroundImageDark
            : styles.backgroundImageLight
        }`}
        id="about"
      />
      <StageText
        InfoTagText={"Deine Lernplattform für die HSRM"}
        headline={
          "Learniverse bietet dir alles, was du für dein Informatikstudium brauchst!"
        }
        subline={
          "Alle Module der Medieninformatik verständlich und strukturiert zusammengefasst und mit passenden Videos angereichert"
        }
      />
      <ModuleCardsContainer />
      <Graphteaser />
      <FormAndImage />
    </div>
  );
}
