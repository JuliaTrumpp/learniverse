import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header/HeaderComponent";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  pathname: "/",
  push: jest.fn(),
};

describe("Header Component", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders Header component with links and toggle button", () => {
    render(<Header />);

    expect(screen.getByTestId("Learniverse Logo")).toBeInTheDocument();

    // always two because of the different overlay for smaller displays
    expect(screen.getAllByText(/Über Learniverse/i)).toHaveLength(2);
    expect(screen.getAllByText(/Module/i)).toHaveLength(2);
    expect(screen.getAllByText(/Graphiverse/i)).toHaveLength(2);
    expect(screen.getAllByText(/Kontakt/i)).toHaveLength(2);
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });
});
