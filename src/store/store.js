import { createStore } from 'vuex';
import { botProfileData, dropdownMenuOptionsData, optionsList, botResponsesData } from '../data';

export const store = createStore({
  state() {
    return {
      isChatWindowOpen: false,
      isChatbotOpen: true,
      isDropdownMenuOpen: false,
      botProfile: botProfileData,
      dropdownMenuOptions: dropdownMenuOptionsData,
      messagesLog: [
        {
          author: "chatbot",
          type: "default",
          content: "¡Hola! Soy Millie de 1MillionBot 🙋🏽‍♀️"
        },
        {
          author: "chatbot",
          type: "default",
          content: "Ya seas particular, empresa o institución, cuéntame tus intereses o necesidades. Así, podré ayudarte mejor. 🌐"
        },
      ],
      currentMessage: {
        content: '',
        author: 'user',
        type: 'default',
      },
      botResponses: botResponsesData,
      optionsCarousel: optionsList,
    };
  },
  mutations: {
    closeChatbot(state) {
      state.isChatbotOpen = false;
    },
    toggleChatbotWindow(state) {
      state.isChatWindowOpen = !state.isChatWindowOpen;
    },
    toggleDropdownMenu(state) {
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
    },
    sendMessage(state) {
      const message = state.currentMessage;
      state.messagesLog.push({ author: message.author, content: message.content, type: message.type });
      state.currentMessage.content = '';
    },
    sendResponse(state) {
      const randomIndex = Math.floor(Math.random() * state.botResponses.length);
      const selectedResponse = state.botResponses[randomIndex];

      let formattedResponse = {
        author: "chatbot",
        type: selectedResponse.type,
        content: null,
      };

      switch (selectedResponse.type) {
        case "default":
          formattedResponse.content = selectedResponse.content;
          break;
        case "imageCard":
          formattedResponse.content = {
            imgUrl: selectedResponse.content.imgUrl,
            title: selectedResponse.content.title,
            text: selectedResponse.content.text,
            articleUrl: selectedResponse.content.articleUrl,
          };
          break;
        default:
          break;
      }

      state.messagesLog.push(formattedResponse);
    },
  },
  actions: {
    sendMessage({ commit }) {
      commit('sendMessage');
      setTimeout(() => {
        commit('sendResponse');
      }, 500);
    },
  },
});