import { createStore } from 'vuex';
import { botProfileData, dropdownMenuOptionsData, chatOptionsList, botResponsesData } from '../data';

export const store = createStore({
  state() {
    return {
      isChatbotOpen: true,
      isFirstVisit: true,
      isCtoOpen: true,
      isChatWindowOpen: false,
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
      chatOptionsList: chatOptionsList,
    };
  },
  mutations: {
    setIsFirstVisit(state, value) {
      console.log("is first visit?")
      state.isFirstVisit = value;
    },
    closeCto(state) {
      state.isCtoOpen = false;
    },
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
        content: selectedResponse.content
      };

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
    showChatWindow({commit, state}) {
      if (state.isCtoOpen) {
        commit('closeCto');
      }
      commit('toggleChatbotWindow')
    }  
  },
});