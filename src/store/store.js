import { createStore } from "vuex";
import {
  dropdownMenuOptionsData,
  botResponsesData,
} from "../data";

export const store = createStore({
  state() {
    return {
      isFirstVisit: !sessionStorage.getItem("visited"),
      isChatbotOpen: true,
      chatbotWindowStatus: "minimized",
      isCtoOpen: true,
      isFullscreen: false,
      isProcessingMessage: false,
      dropdownMenuOptions: dropdownMenuOptionsData,
      messagesLog: [
        {
          author: "chatbot",
          type: "default",
          content: "Hi! I'm your virtual assistant! 🙋🏽‍♀️",
        },
        {
          author: "chatbot",
          type: "default",
          content:
            "Even you are a personalbar, company or institution, tell me about your interests or namedItems. I'm here to help 🌐"
        },
      ],
      currentUserMessage: {
        content: "",
      },
      botResponses: botResponsesData,
    };
  },
  mutations: {
    closeCto(state) {
      state.isCtoOpen = false;
    },
    closeChatbot(state) {
      state.isChatbotOpen = false;
    },
    setChatbotWindowStatus(state, newStatus) {
      state.chatbotWindowStatus = newStatus;
    },
    toggleFullscreen(state) {
      state.isFullscreen = !state.isFullscreen;
    },
    sendMessage(state, message) {
      state.messagesLog.push(message);
      state.currentUserMessage.content = "";
    },
    setIsProcessing(state, isProcessing) {
      state.isProcessingMessage = isProcessing;
    },
    sendResponse(state, response) {
      state.isProcessingMessage = false;
      state.messagesLog.push(response);
    },
    setFirstVisit(state, isFirstVisit) {
      state.isFirstVisit = isFirstVisit;
    },
  },
  actions: {
    toggleChatbotWindowStatus({ commit, state }) {
      const currentStatus = state.chatbotWindowStatus;
      state.isCtoOpen ? commit("closeCto") : null;
      switch (currentStatus) {
        case "minimized":
          commit("setChatbotWindowStatus", "toShowing");
          setTimeout(() => {
            commit("setChatbotWindowStatus", "showing");
          }, 100);
          break;

        case "showing":
          commit("setChatbotWindowStatus", "toMinimized");
          state.isFullscreen = false;
          setTimeout(() => {
            commit("setChatbotWindowStatus", "minimized");
          }, 400);
          break;

        default:
          break;
      }
    },
    async processResponse({ commit, state }) {
      setTimeout(() => {
        commit("setIsProcessing", true);
      }, 750);

      const getResponse = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const randomIndex = Math.floor(
              Math.random() * state.botResponses.length,
            );
            const selectedResponse = state.botResponses[randomIndex];
            let formattedResponse = {
              author: "chatbot",
              type: selectedResponse.type,
              content: selectedResponse.content,
            };
            resolve(formattedResponse);
          }, 3000);
        });
      };

      const response = await getResponse();

      commit("sendResponse", response);
    },
    processUserMessage({ dispatch, commit }, message) {
      const formattedMessage = {
        author: "user",
        content: message.content,
        type: "default",
      };
      commit("sendMessage", formattedMessage);
      dispatch("processResponse");
    },
    checkFirstVisit({ state }) {
      if (state.isFirstVisit) {
        sessionStorage.setItem("visited", "true");
      }
    },
  },
});
