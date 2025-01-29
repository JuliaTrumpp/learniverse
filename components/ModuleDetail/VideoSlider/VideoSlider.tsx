import YouTubeVideo from "./YoutubeVideo";
import styles from "./VideoSlider.module.css";
import { useThemeContext } from "@/context/ThemeContext";

interface Chapter {
  name: string;
  number: string;
  introductionText: string;
  videoIds: string[];
  contentPart: { title: string; description: string }[];
}

interface VideoListProps {
  chapter?: Chapter;
}

export default function VideoList({ chapter }: VideoListProps) {
  const {theme} = useThemeContext();

  return (
    <div className={styles.container}>
      <h3
        className={`${
          theme === "light"
            ? styles.lightModeText
            : styles.darkModeText
        }`}
      >
        Videos zu Kapitel {chapter?.number} - {chapter?.name} (
        {chapter?.videoIds.length})
      </h3>
      <div className={styles.sliderContainer}>
        {chapter?.videoIds.map((videoId, index) => (
          <YouTubeVideo
            key={index}
            data-testid="youtube-video"
            videoId={videoId}
          ></YouTubeVideo>
        ))}
      </div>
    </div>
  );
}
