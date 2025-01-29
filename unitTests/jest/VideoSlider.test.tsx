import React, { useEffect } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import VideoSlider from "@/components/ModuleDetail/VideoSlider/VideoSlider";
import {
  ChapterContextProvider,
  useChapterContext,
} from "@/context/ChapterContext";

describe("VideoSlider Component", () => {
  const mockChapterContextValue = {
    currentModule: "Lineare Algebra",
    chapter: "1",
    handleChapter: jest.fn(),
  };

  const mockChapter = {
    name: "Folgen und Reihen",
    number: "1",
    introductionText:
      "Ordnet man jeder natürlichen Zahl n eine reelle Zahl eindeutig zu, so entsteht eine unendliche (reelle) Folge. Die einzelnen Werte der Folge heißen Folgenglieder und werden mit Indizes durchnummeriert. Im Unterschied zu einer Menge kann bei einer Folge ein und das selbe Glied mehrere Male auftreten. Die Definition einer Folge kann auf zweierlei Arten. Viele Folgen lassen sich nach einem Bildungsgesetz mittels eines Terms aufstellen. Das Bildungsgesetz wird hierzu in runde Klammern geschrieben.",
    videoIds: ["yr5nnZud5ao", "QLSBPdmTKys", "nEyl0VobgWA", "qVv_y5sJgkk"],
    contentPart: [
      { title: "Einführung", description: "Einführung in das Thema" },
    ],
  };

  const MockVideoSlider = () => {
    const { handleChapter, chapter } = useChapterContext();

    useEffect(() => {
      handleChapter(
        mockChapterContextValue.currentModule,
        mockChapterContextValue.chapter
      );
    }, [handleChapter]);

    return <VideoSlider chapter={mockChapter} />;
  };

  it("renders VideoList component with correct number of YouTubeVideo components", async () => {
    render(
      <ChapterContextProvider>
        <MockVideoSlider />
      </ChapterContextProvider>
    );

    await waitFor(() => {
      const titleElement = screen.getByRole("heading");
      const sliderContainer = titleElement.nextElementSibling;
      expect(sliderContainer?.children).toHaveLength(
        mockChapter.videoIds.length
      );
    });
  });

  it("loads the chapter correctly (based on mockChapterContext)", async () => {
    render(
      <ChapterContextProvider>
        <MockVideoSlider />
      </ChapterContextProvider>
    );

    const titleElement = await screen.findByText(/Videos zu Kapitel 1/);
    const chapterTitleElement = await screen.findByText(/Folgen und Reihen/);
    expect(titleElement).toBeInTheDocument();
    expect(chapterTitleElement).toBeInTheDocument();
  });
});
