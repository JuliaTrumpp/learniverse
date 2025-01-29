import moduleDetailetailStyles from "@/components/ModuleDetail/ModuleDetail_Module.module.css";
import styles from "./TextContent.module.css";
import { useThemeContext } from "@/context/ThemeContext";

interface TextContentProps {
  title?: String;
  text?: String;
}

function TextContent({ title, text }: TextContentProps) {
  const themeContext = useThemeContext();

  return (
    <div className={styles.container}>
      <h2
        className={`${
          themeContext.theme === "light"
            ? moduleDetailetailStyles.lightModeText
            : moduleDetailetailStyles.darkModeText
        }`}
      >
        {title}
      </h2>
      <p
        className={`${
          themeContext.theme === "light"
            ? styles.lightModeText
            : styles.darkModeText
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export default TextContent;
