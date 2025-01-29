import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Chat from "@/components/Chat/Chat";
import { MessageContext } from "@/context/MessageContext";

jest.mock("groq-sdk", () => {
  return jest.fn().mockImplementation(() => {
    return {
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            choices: [
              {
                message: {
                  content: "Hallo, wie kann ich dir helfen?",
                },
              },
            ],
          }),
        },
      },
    };
  });
});

const mockMessages = [
  { text: "Hello!", who: "user" },
  { text: "Hallo, wie kann ich dir helfen?", who: "bot" },
];

describe("Chat Component", () => {
  it("sends a message and receives a response", async () => {
    const onClose = jest.fn();
    const onDelete = jest.fn();
    const mockDeleteSendMessages = jest.fn();
    const mockAddMessage = jest.fn();

    const { getByPlaceholderText, getByTestId, getByText } = render(
      <MessageContext.Provider
        value={{
          messages: mockMessages,
          addMessage: mockAddMessage,
          deleteSendMessages: mockDeleteSendMessages,
        }}
      >
        <Chat onClose={onClose} onDelete={onDelete} />
      </MessageContext.Provider>
    );

    const input = getByPlaceholderText("Schreibe deine Nachricht...");
    fireEvent.change(input, { target: { value: "Hallo!" } });

    const sendButton = getByTestId("send");
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(mockAddMessage).toHaveBeenCalledWith({
        text: "Hallo!",
        who: "user",
      });
      expect(mockAddMessage).toHaveBeenCalledWith({
        text: "Hallo, wie kann ich dir helfen?",
        who: "bot",
      });
      expect(getByText("Hallo, wie kann ich dir helfen?")).toBeInTheDocument();
    });
  });
});
