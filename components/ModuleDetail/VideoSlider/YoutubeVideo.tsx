import styles from "./YoutubeVideo.module.css";

type YouTubeVideoProps = {
  videoId: string;
};
const apiKey = process.env.NEXT_PUBLIC_YT_API_KEY;

function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  return (
    <div className={styles.container}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
}

export default YouTubeVideo;
