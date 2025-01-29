import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeContextProvider } from "@/context/ThemeContext";
import Plotter from "@/components/Plotter/Plotter";

jest.mock("react-plotly.js", () => ({
  __esModule: true,
  default: jest.fn(() => null),
}));

const xRange: [number, number] = [-10, 10];

describe("Plotter Component", () => {
  it("handles valid and invalid function input", () => {
    render(
      <ThemeContextProvider>
        <Plotter xRange={xRange} />
      </ThemeContextProvider>
    );

    const inputElement = screen.getByPlaceholderText(
      "Geben Sie hier Ihre Funktion ein"
    );

    // valid input
    fireEvent.change(inputElement, { target: { value: "x * x" } });
    expect(screen.queryByText("Ungültige Funktion")).toBeNull();

    // invalid input
    fireEvent.change(inputElement, { target: { value: "das geht nicht" } });
    expect(screen.getByText("Ungültige Funktion")).toBeInTheDocument();
  });

  it("renders with default dark mode styles", () => {
    const { container } = render(
      <ThemeContextProvider>
        <Plotter xRange={xRange} />
      </ThemeContextProvider>
    );

    const inputElement = screen.getByText("Example function of x: x * x + 99");
    const tooltipElement = container.querySelector(".tooltip");

    expect(inputElement).toHaveClass(
      "tooltipText darkModeTooltipText tagline-regular"
    );
    expect(tooltipElement).toHaveClass("tooltip darkModeTooltip");
  });
});
