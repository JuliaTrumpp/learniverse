import TextContent from "@/components/ModuleDetail/TextContent/TextContent";
import { render, screen } from "@testing-library/react";

describe("TextContent component", () => {
  const mockTextContentProps = {
    title: "MockTitle",
    text: "MockText",
  };

  it("shows Title and TextContent", () => {
    render(
      <TextContent
        title={mockTextContentProps.title}
        text={mockTextContentProps.text}
      />
    );

    expect(screen.getByText(/MockTitle/i)).toBeInTheDocument();
    expect(screen.getByText(/MockText/i)).toBeInTheDocument();
  });
});
