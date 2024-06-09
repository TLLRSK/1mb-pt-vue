import { createStore } from "vuex";
import {
  botProfileData,
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
      isFullScreen: false,
      isProcessingMessage: false,
      botProfile: botProfileData,
      dropdownMenuOptions: dropdownMenuOptionsData,
      messagesLog: [
        {
          author: "chatbot",
          type: "default",
          content: "¡Hola! Soy Millie de 1MillionBot 🙋🏽‍♀️",
        },
        {
          author: "chatbot",
          type: "default",
          content:
            "Ya seas particular, empresa o institución, cuéntame tus intereses o necesidades. Así, podré ayudarte mejor. 🌐",
        },
      ],
      currentUserMessage: {
        content: "",
        author: "user",
        type: "default",
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
    toggleChatbotWindowStatus(state) {
      const currentStatus = state.chatbotWindowStatus;
      switch (currentStatus) {
        case "minimized":
          state.chatbotWindowStatus = "toShowing";
          console.log("toShowing");
          setTimeout(() => {
            state.chatbotWindowStatus = "showing";
            console.log("showing");
          }, 100);
          break;

        case "showing":
          state.chatbotWindowStatus = "toMinimized";
          console.log("toMinimized");
          setTimeout(() => {
            state.chatbotWindowStatus = "minimized";
            console.log("minimized");
          }, 400);
          break;

        default:
          break;
      }
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

    showChatWindow({ commit, state }) {
      if (state.isCtoOpen) {
        commit("closeCto");
      }
      commit("toggleMinimized");
    },
    checkFirstVisit({ state }) {
      if (state.isFirstVisit) {
        sessionStorage.setItem("visited", "true");
      }
    },
  },
});
