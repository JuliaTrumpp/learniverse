import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ThemeContextProvider } from "../../context/ThemeContext";
import { Form } from "@/components/Formular/Form";

describe("Form Component", () => {
  beforeEach(() => {
    render(
      <ThemeContextProvider>
        <Form />
      </ThemeContextProvider>
    );
  });

  it("renders the form fields correctly", () => {
    expect(screen.getByPlaceholderText("E-Mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Vorname")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nachname")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(
        "Erzähle uns von deinem Anliegen (z.B. Anfrage zur Nachhilfe oder Wünsche)"
      )
    ).toBeInTheDocument();
  });

  it("displays error messages when submitting empty form", async () => {
    fireEvent.click(screen.getByText("Senden"));

    await waitFor(() => {
      expect(screen.getByText("E-Mail ist erforderlich")).toBeInTheDocument();
      expect(screen.getByText("Vorname ist erforderlich")).toBeInTheDocument();
      expect(screen.getByText("Nachname ist erforderlich")).toBeInTheDocument();
      expect(
        screen.getByText("Nachricht ist erforderlich")
      ).toBeInTheDocument();
    });
  });

  it("validates email format correctly", async () => {
    fireEvent.change(screen.getByPlaceholderText("E-Mail"), {
      target: { value: "invalid-email" },
    });
    fireEvent.click(screen.getByText("Senden"));

    await waitFor(() => {
      expect(screen.getByText("Ungültige E-Mail-Adresse")).toBeInTheDocument();
    });
  });

  it("submits the form with valid inputs", async () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    fireEvent.change(screen.getByPlaceholderText("E-Mail"), {
      target: { value: "Dill.Diehl@zweibruecken.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Vorname"), {
      target: { value: "Dill" },
    });
    fireEvent.change(screen.getByPlaceholderText("Nachname"), {
      target: { value: "Diehl" },
    });
    fireEvent.change(
      screen.getByPlaceholderText(
        "Erzähle uns von deinem Anliegen (z.B. Anfrage zur Nachhilfe oder Wünsche)"
      ),
      {
        target: { value: "This is a text to test the form :)" },
      }
    );

    fireEvent.click(screen.getByText("Senden"));

    await waitFor(() => {
      expect(
        screen.queryByText("E-Mail ist erforderlich")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Vorname ist erforderlich")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Nachname ist erforderlich")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Nachricht ist erforderlich")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("Ungültige E-Mail-Adresse")
      ).not.toBeInTheDocument();
    });

    console.log = jest.fn();
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(
        "Formular ist gültig, sende Daten..."
      );
    });
    consoleSpy.mockRestore();
  });
});
