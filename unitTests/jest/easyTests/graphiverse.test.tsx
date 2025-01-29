import React from "react";
import { render } from "@testing-library/react";
import { ThemeContextProvider } from "@/context/ThemeContext";
import Graphiverse from "@/pages/graphiverse";

describe("Graphiverse Component", () => {
  it("renders elements correctly", () => {
    const { getByText } = render(<Graphiverse />);

    expect(getByText("Deine Lernplattform für die HSRM")).toBeInTheDocument();
    expect(getByText("Das Learniverse Graphtool")).toBeInTheDocument();
    expect(
      getByText(
        "Mit unserem neuen Graphtool alle deine komplexen mathematischen Formeln greifbar machen!"
      )
    ).toBeInTheDocument();
  });

  it("renders with default dark mode styles correctly", () => {
    const { container } = render(
      <ThemeContextProvider>
        <Graphiverse />
      </ThemeContextProvider>
    );

    expect(container.firstChild).toHaveClass("darkMode");
  });
});
