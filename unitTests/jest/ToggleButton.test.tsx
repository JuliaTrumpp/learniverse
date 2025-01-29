import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToggleButton from "@/components/Header/ToggleButton/ToggleButton";
import { ThemeContextProvider, useThemeContext } from "@/context/ThemeContext";

const TestComponent = () => {
  const { theme } = useThemeContext();
  return <div data-testid="theme">{theme}</div>;
};

describe("ToggleButton Component", () => {
  it("changes the themeContext correctly", () => {
    render(
      <ThemeContextProvider>
        <ToggleButton />
        <TestComponent />
      </ThemeContextProvider>
    );

    const button = screen.getByRole("button");
    const themeDisplay = screen.getByTestId("theme");

    expect(themeDisplay.textContent).toBe("dark");

    fireEvent.click(button);

    expect(themeDisplay.textContent).toBe("light");

    fireEvent.click(button);

    expect(themeDisplay.textContent).toBe("dark");
  });
});
