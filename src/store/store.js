import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      isChatWindowOpen: false,
      isChatbotOpen: true,
      isDropdownMenuOpen: false,
      botProfile: {
        imgUrl: "../../public/images/chabot-pfp.gif",
        name: "Millie"
      },
      dropdownMenuOptions: [
        { text: "Forget user data" },
        { text: "Change language" },
        { text: "Access the privacy policy" },
      ],
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
        author: 'user',
        content: '',
      },
      botResponses: [
        {
          type: "default",
          content: "random response from chatbot",
        },
        {
          type: "default",
          content: "another random response",
        },
        {
          type: "imageCard",
          content: {
            imgUrl: "public/images/article-image.webp",
            title: "article title",
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea, dolores nisi sed numquam a.",
            articleUrl: "https://placehold.jp/150x150.png",
          },
        },
      ],
      optionsCarousel: [
        {text: "Qué es un chatbot"},
        {text: "Para qué sirve"},
        {text: "Qué es 1millionbot"},
        {text: "Qué es una IA"}
      ],
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
      state.messagesLog.push({ author: 'user', content: message.content, type: 'default' });
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