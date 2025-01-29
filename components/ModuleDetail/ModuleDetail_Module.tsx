import { useEffect, useState, useContext } from "react";
import { useThemeContext } from "@/context/ThemeContext";
import { useChapterContext } from "@/context/ChapterContext";
import { MessageContext } from "@/context/MessageContext";
import apiData from "@/pages/api/content";
import styles from "./ModuleDetail_Module.module.css";
import VideoList from "@/components/ModuleDetail/VideoSlider/VideoSlider";
import TextContent from "@/components/ModuleDetail/TextContent/TextContent";
import HeadlineAndChapterButtons from "@/components/ModuleDetail/HeadlineAndChapterButtons/HeadlineAndChapterButtons";
import ModuleCardsSlider from "@/components/ModuleCardSlider/ModuleCardsSlider";
import ChatbotIconLightmode from "@/public/Icons/chatbot-lm.svg";
import ChatbotIconDarkmode from "@/public/Icons/chatbot-dm.svg";
import Chat from "@/components/Chat/Chat";

interface IModuleDetailProps {
  moduleDetail: string | undefined | string[];
}

export default function ModuleDetail_Module({
  moduleDetail,
}: IModuleDetailProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { theme } = useThemeContext();
  const chapterContext = useChapterContext();
  const { deleteSendMessages } = useContext(MessageContext);
  const currentModule = apiData.modules.find(
    (currentModule) => currentModule.modulename === chapterContext.currentModule
  );
  const chapter = currentModule?.chapters.find(
    (chapter) => chapter.number === chapterContext.chapter
  );

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleDeleteChat = () => {
    deleteSendMessages();
  };

  useEffect(() => {
    if (moduleDetail && typeof moduleDetail === "string") {
      chapterContext.handleChapter(moduleDetail, chapterContext.chapter);
    }
  }, [moduleDetail]);

  return (
    <div
      className={`${
        theme === "light"
          ? styles.lightModeBackground
          : styles.darkModeBackground
      }`}
    >
      <div className={`${styles.pageSections} section-spacing-lr`}>
        <div>
          <HeadlineAndChapterButtons currentModule={currentModule} />
          <TextContent
            title={chapter?.name}
            text={chapter?.introductionText}
          ></TextContent>
        </div>
        <VideoList chapter={chapter}></VideoList>
        {chapter?.contentPart.map((content, index) => (
          <div className={styles.moduleCard} key={index}>
            <TextContent
              title={content.title}
              text={content.description}
            ></TextContent>
          </div>
        ))}

        <div className={styles.headlineAndSlider}>
          <h3
            className={`${
              theme === "light" ? styles.lightModeText : styles.darkModeText
            } ${styles.sliderHeadline}`}
          >
            Diese Module könnten dich auch interessieren
          </h3>
          <div className={styles.sliderContainer}>
            <ModuleCardsSlider currentModule={currentModule} />
          </div>
        </div>
      </div>

      <button
        className={`${styles.chatbotButton} ${
          theme === "light"
            ? styles.lightModeChatbotButton
            : styles.darkModeChatbotButton
        }`}
        onClick={toggleChat}
      >
        {theme === "light" ? (
          <ChatbotIconLightmode className={styles.chatbotIcon} />
        ) : (
          <ChatbotIconDarkmode className={styles.chatbotIcon} />
        )}
      </button>

      <div
        className={`${styles.chatContainer} ${
          !isChatOpen ? styles.chatContainerHidden : ""
        }`}
      >
        <Chat onClose={toggleChat} onDelete={handleDeleteChat} />
      </div>
    </div>
  );
}
