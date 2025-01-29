import React from "react";
import styles from "@/components/InfoTag/InfoTag.module.css";
import { useThemeContext } from "@/context/ThemeContext";

interface InfoTagProps {
  text: string;
}

export function InfoTag({ text }: InfoTagProps) {
  const { theme } = useThemeContext();

  return (
    <div
      className={`${styles.container} ${
        theme === "dark" ? styles.containerDark : styles.containerLight
      }`}
    >
      <div className={styles.taglineContainer}>
        <p
          className={`${styles.p} tagline-medium ${
            theme === "dark" ? styles.pDark : styles.pLight
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

export default InfoTag;
