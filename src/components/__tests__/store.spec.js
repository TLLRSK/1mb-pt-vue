import { expect } from "vitest";
import { store } from "../../store/store.js";

describe("Vuex Store", () => {
  it("initializes with the correct state", () => {
    const state = store.state;
    /* Testing some state values */
    expect(state.isChatbotOpen).toBe(true);
    expect(state.isCtoOpen).toBe(true);
    expect(state.isChatbotMinimized).toBe(true);
    expect(state.isFullScreen).toBe(false);
    expect(state.isProcessingMessage).toBe(false);
  });

  it("mutations correctly update the state", () => {
    const state = store.state;
    store.commit("closeCto");

    expect(state.isCtoOpen).toBe(false);
  });

  it("new user message is processed correctly", async () => {
    const state = store.state;

    expect(typeof store._actions["processResponse"]).toBe("object");

    expect(state.isProcessingMessage).toBe(false);
    /* Dispatching processUserMessage */
    await store.dispatch("processUserMessage", { content: "Test message" });
    await new Promise((resolve) => setTimeout(resolve, 750)); // Here is calling processResponse

    expect(state.messagesLog.length).toBe(3); // the message was added
    expect(state.isProcessingMessage).toBe(true); // processResponse has been called

    /* Checking message values */
    const lastMessage = state.messagesLog[state.messagesLog.length - 1];

    expect(lastMessage.content).toBe("Test message");
    expect(lastMessage.author).toBe("user");
    expect(lastMessage.type).toBe("default");

    /* Checking if isProcessingMessage has changed */
    await new Promise((resolve) => setTimeout(resolve, 3750));
    expect(state.isProcessingMessage).toBe(false);

    /* Checking if chatbot has responded */
    expect(state.messagesLog.length).toBe(4); // Response has been sended
    const botMessage = state.messagesLog[state.messagesLog.length - 1];
    expect(botMessage.author).toBe("chatbot");
  });
});
