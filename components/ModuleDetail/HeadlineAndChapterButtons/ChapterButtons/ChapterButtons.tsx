import { useChapterContext } from "@/context/ChapterContext";
import styles from "./ChapterButtons.module.css";
import { useThemeContext } from "@/context/ThemeContext";
import { Module } from "@/interfaces/moduleInterfaces";
import CheckedIcon from "@/public/Icons/checked.svg";

interface ChapterButtonsProps {
  currentModule?: Module;
}

function ChapterButtons({ currentModule }: ChapterButtonsProps) {
  const themeContext = useThemeContext();
  const chapterContext = useChapterContext();

  return (
    <div className={styles.container}>
      {currentModule?.chapters.map((content, index) => (
        <button
          key={index}
          onClick={() =>
            chapterContext.handleChapter(currentModule.modulename, content.number)
          }
          className={`${styles.chapterButton} ${
            themeContext.theme === "light"
              ? styles.lightModeChapterButton
              : styles.darkModeChapterButton
          } ${
            chapterContext.chapter === content.number ? styles.active : ""
          } ${
            parseInt(content.number) < parseInt(chapterContext.chapter)
              ? styles.checked
              : ""
          } `}
        >
          {parseInt(content.number) < parseInt(chapterContext.chapter) ? (
            <CheckedIcon className={styles.checkedIcon} />
          ) : (
            <h2>{content.number}</h2>
          )}
        </button>
      ))}
    </div>
  );
}

export default ChapterButtons;
