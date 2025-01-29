import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeContextProvider } from "../../../context/ThemeContext";
import { FormAndImage } from "@/components/Formular/FormAndImage";

describe("FormAndImage Component", () => {
  it("renders correctly with default dark theme", () => {
    const { getByText, getByAltText } = render(<FormAndImage />);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(getByAltText("Kontakt Person Bild")).toBeInTheDocument();

    expect(getByText("Julian Saarmann")).toBeInTheDocument();
    expect(getByText("Kontaktperson")).toBeInTheDocument();
  });

  it("renders with default dark mode correctly", () => {
    const { getByText } = render(
      <ThemeContextProvider>
        <FormAndImage />
      </ThemeContextProvider>
    );

    expect(getByText("Julian Saarmann")).toHaveClass("darkText tagline-medium");
    expect(getByText("Kontaktperson")).toHaveClass(
      "descriptionP darkP tagline-medium"
    );
  });
});
