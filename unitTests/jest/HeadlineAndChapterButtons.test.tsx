import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HeadlineAndChapterButtons from "@/components/ModuleDetail/HeadlineAndChapterButtons/HeadlineAndChapterButtons";
import {
  ChapterContextProvider,
  useChapterContext,
} from "@/context/ChapterContext";
import { Module } from "@/interfaces/moduleInterfaces";

const mockModule: Module = {
  modulename: "MockModule",
  suggestedModules: ["Suggested1", "Suggested2"],
  chapters: [
    {
      name: "MockChapter 1",
      number: "1",
      introductionText: "Mockblabla",
      videoIds: ["yr5nnZud5ao", "QLSBPdmTKys", "nEyl0VobgWA"],
      contentPart: [{ title: "ContentTitle", description: "ContentText" }],
    },
    {
      name: "MockChapter 2",
      number: "2",
      introductionText: "Mockblabla",
      videoIds: ["yr5nnZud5ao", "QLSBPdmTKys", "nEyl0VobgWA"],
      contentPart: [{ title: "ContentTitle", description: "ContentText" }],
    },
  ],
};

const ThemeDisplayComponent = () => {
  const { chapter } = useChapterContext();
  return <div data-testid="chapter">{chapter}</div>;
};

describe("HeadlineAndChapterButtons Component test", () => {
  it("loads Headline and chapters correctly", async () => {
    render(<HeadlineAndChapterButtons currentModule={mockModule} />);

    await waitFor(() => {
      // Headline
      expect(screen.getByText(mockModule.modulename)).toBeInTheDocument();

      // Chapter Buttons
      const buttons = screen.getAllByRole("button");
      const onlyChapterButtons = buttons.length - 2; // - "zurück" and "weiter" buttons
      expect(onlyChapterButtons).toEqual(mockModule.chapters.length);
    });
  });

  it("switches chapters correctly", async () => {
    render(
      <ChapterContextProvider>
        <HeadlineAndChapterButtons currentModule={mockModule} />
        <ThemeDisplayComponent />
      </ChapterContextProvider>
    );

    const chapterDisplay = screen.getByTestId("chapter");

    // The chapter number in the beginning is 1
    expect(chapterDisplay.textContent).toBe("1");

    const backButton = screen.getByText(/zurück/i);
    const nextButton = screen.getByText(/weiter/i);

    // Switch to next chapter (->2)
    fireEvent.click(nextButton);
    expect(chapterDisplay.textContent).toBe("2");

    // Switch back to the first chapter (->1)
    fireEvent.click(backButton);
    expect(chapterDisplay.textContent).toBe("1");

    // Chapter Buttons (besides last two: zurück & weiter) (->2)
    let buttons = await screen.findAllByRole("button");
    fireEvent.click(buttons[1]);
    await waitFor(() => expect(chapterDisplay.textContent).toBe("2"));
  });
});
