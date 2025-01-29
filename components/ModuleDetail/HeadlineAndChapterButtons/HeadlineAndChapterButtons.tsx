import { useThemeContext } from "@/context/ThemeContext";
import styles from "./HeadlineAndChapterButtons.module.css";
import ChapterButtons from "./ChapterButtons/ChapterButtons";
import moduleDetailetailStyles from "@/components/ModuleDetail/ModuleDetail_Module.module.css";
import { useChapterContext } from "@/context/ChapterContext";
import apiData from "@/pages/api/content";
import LeftArrow from "@/public/Icons/left-arrow.svg";
import RightArrow from "@/public/Icons/right-arrow.svg";
import { Module } from "@/interfaces/moduleInterfaces";

interface HeadlineAndChapterButtonsProps {
  currentModule?: Module;
}

function HeadlineAndChapterButtons({ currentModule }: HeadlineAndChapterButtonsProps) {
  const themeContext = useThemeContext();
  const chapterContext = useChapterContext();

  const switchChapter = (next: boolean) => {
    if (currentModule) {
      const currentModule = apiData.modules.find(
        (currentModule) => currentModule.modulename === chapterContext.currentModule
      );
      const chapter = currentModule?.chapters.find(
        (chapter) => chapter.number === chapterContext.chapter
      );

      if (currentModule && chapter) {
        if (next) {
          if (currentModule?.chapters.length != parseInt(chapterContext.chapter)) {
            const nextChapterNumber = parseInt(chapter?.number) + 1;
            chapterContext.handleChapter(
              currentModule.modulename,
              nextChapterNumber.toString()
            );
          } else {
            const nextChapterNumber = "1";
            chapterContext.handleChapter(
              currentModule.modulename,
              nextChapterNumber.toString()
            );
          }
        } else {
          if ("1" != chapterContext.chapter) {
            const previousChapterNumber = parseInt(chapter?.number) - 1;
            chapterContext.handleChapter(
              currentModule.modulename,
              previousChapterNumber.toString()
            );
          } else {
            const previousChapterNumber = currentModule?.chapters.length;
            chapterContext.handleChapter(
              currentModule.modulename,
              previousChapterNumber.toString()
            );
          }
        }
      } else {
        console.log(
          "Modul nicht gefunden. Kontext kann nicht geändert werden."
        );
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headlineAndButtonContainer}>
        <h1
          className={`${
            themeContext.theme === "light"
              ? moduleDetailetailStyles.lightModeText
              : moduleDetailetailStyles.darkModeText
          } ${styles.headline}`}
        >
          {currentModule?.modulename}
        </h1>
        <ChapterButtons currentModule={currentModule} />
      </div>

      <div className={styles.backNextButtonContainer}>
        <button
          className={`${styles.generalButton} ${styles.leftButton} ${
            themeContext.theme === "light"
              ? styles.lightModeLeftButton
              : styles.darkModeLeftButton
          }`}
          onClick={() => switchChapter(false)}
        >
          <LeftArrow
            className={`${styles.leftArrow} ${
              themeContext.theme === "light"
                ? styles.lightModeLeftArrow
                : styles.darkModeLeftArrow
            }`}
          />
          <p className={`${styles.arrowButtonText} medium`}>zurück</p>
        </button>
        <button
          className={`${styles.generalButton} ${styles.rightButton} ${
            themeContext.theme === "light"
              ? styles.lightModeRightButton
              : styles.darkModeRightButton
          }`}
          onClick={() => switchChapter(true)}
        >
          <p className={`${styles.arrowButtonText} medium`}>weiter</p>
          {themeContext.theme === "light" ? (
            <RightArrow className={styles.rightArrow} />
          ) : (
            <RightArrow
              className={`${styles.rightArrow} ${styles.darkModeRightArrow}`}
            />
          )}
        </button>
      </div>
    </div>
  );
}

export default HeadlineAndChapterButtons;
