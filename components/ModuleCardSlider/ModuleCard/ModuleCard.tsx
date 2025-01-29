import styles from "@/components/ModuleCardSlider/ModuleCard/ModuleCard.module.css";
import ARROWD from "@/public/Icons/arrow_darkmode.svg";
import ARROWL from "@/public/Icons/arrow_lightmode.svg";
import { useThemeContext } from "@/context/ThemeContext";
import { useChapterContext } from "@/context/ChapterContext";

interface TModuleCardProps {
  lv: String;
  text: string;
  name: string;
  color: string;
}

function ModuleCard({ name, text, lv, color }: TModuleCardProps) {
  const { theme } = useThemeContext();
  const chapterContext = useChapterContext();

  const redirectToNewPage = () => {
    window.location.href = `/moduleDetail/${name}`;
    chapterContext.handleChapter(name, "1");
  };

  return (
    <div
      className={`${styles.textCard} ${
        theme === "light" ? styles.lightMode : styles.darkMode
      }`}
      onClick={redirectToNewPage}
      style={{ cursor: "pointer" }}
    >
      <div className={styles.info}>
        <div className={styles.lv}>
          <div
            className={styles.index}
            style={{ backgroundColor: color }}
          ></div>
          <div className={styles.id}>
            <p
              className={
                theme === "light" ? styles.lightMode_p : styles.darkMode_p
              }
            >
              {lv}
            </p>
          </div>
        </div>

        <div className={styles.infoText}>
          <p
            className={
              theme === "light" ? styles.lightMode_p : styles.darkMode_p
            }
          >
            {text}
          </p>
        </div>
      </div>

      <hr className="hr"></hr>

      <div className={styles.nameLink}>
        <h2
          className={
            theme === "light" ? styles.lightMode_h3 : styles.darkMode_h3
          }
        >
          {name}
        </h2>
        <div>
          {theme === "light" ? (
            <ARROWL className={styles.arrow} />
          ) : (
            <ARROWD className={styles.arrow} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ModuleCard;
