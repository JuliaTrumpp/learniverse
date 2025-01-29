import YouTubeVideo from "@/components/ModuleDetail/VideoSlider/YoutubeVideo";
import { render, screen } from "@testing-library/react";

describe("YouTubeVideo component", () => {
  const mockVideoId = "yr5nnZud5ao";

  it("renders an iframe with the correct src URL", () => {
    render(<YouTubeVideo videoId={mockVideoId} />);

    const iframe = screen.getByTitle(/YouTube video/i);
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      `https://www.youtube.com/embed/${mockVideoId}`
    );
  });
});
