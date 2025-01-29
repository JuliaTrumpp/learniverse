import React from "react";
import { screen, render } from "@testing-library/react";
import Graphteaser from "@/components/Graphteaser/Graphteaser";

describe("Graphteaser Component", () => {
  it("renders elements correctly", () => {
    render(<Graphteaser />);

    expect(
      screen.getByText("Learniverse hat einen Plot-Twist")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Mit unserem neuen Graphtool alle deine komplexen mathematischen Formeln greifbar machen!"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Bring mich hin")).toBeInTheDocument();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
