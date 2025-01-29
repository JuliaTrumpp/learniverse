import React from "react";
import InfoTag from "@/components/InfoTag/InfoTag";
import styles from "./StageText.module.css";
import { useThemeContext } from "@/context/ThemeContext";
import BenefitCardBar from "../BenefitCardBar/BenefitCardBar";

interface StageTextProps {
  InfoTagText: string;
  headline: string;
  subline: string;
}

function StageText({ InfoTagText, headline, subline }: StageTextProps) {
  const themeContext = useThemeContext();

  return (
    <div className={styles.container}>
      <InfoTag text={InfoTagText} />
      <h1 className={styles.h1}>{headline}</h1>
      <h2 className={`regular ${styles.h2}`}>{subline}</h2>
      <BenefitCardBar />
    </div>
  );
}

export default StageText;
