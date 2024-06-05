<template>
  <section 
    :class="['app-chatbot', {'closed': !isChatbotOpen}]"
    v-if="isChatbotOpen">

      <div class="chatbot-container--hidden" v-if="!isChatbotVisible">
        <button class="btn--show-chatbot" @click="toggleChatbotWindow">
          <img src="../public/images/chabot-pfp.gif" alt="">
        </button>
        <button class="btn--close-chatbot" @click="closeChatbot">
          <icon-close/>
        </button>
      </div>

      <div class="chatbot-container--visible" v-else>
        <nav-bar @toggle-chatbot="toggleChatbotWindow"/>

        <messages-container 
          :messagesLog="messagesLog"
        />

        <chat-questions-carousel />

        <message-input @send-message="sendMessage" />

        <chatbot-footer></chatbot-footer>

      </div>
  </section>
</template>

<script>

import NavBar from './components/navbar/NavBar.vue';
import MessagesContainer from './components/messagesContainer/MessagesContainer.vue';
import ChatQuestionsCarousel from './components/questionsCarousel/QuestionsCarousel.vue';
import MessageInput from './components/messageInput/MessageInput.vue';
import ChatbotFooter from './components/footer/ChatbotFooter.vue';
import IconClose from './components/icons/IconClose.vue';

export default {
  components: {
    NavBar,
    MessagesContainer,
    ChatQuestionsCarousel,
    MessageInput,
    ChatbotFooter,
    IconClose,
  },
  data() {
    return {
      isChatbotVisible: false,
      isChatbotOpen: true,
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
      chatbotResponses: [
        {
          type: "default",
          content: "random response from chatbot",
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
    };
  },
  methods: {
    toggleChatbotWindow() {
      this.isChatbotVisible = !this.isChatbotVisible;
    },
    closeChatbot() {
      this.isChatbotOpen = false;
    },
    sendMessage(message) {
      this.messagesLog.push({ author: 'user', content: message.content, type: 'default' });
      setTimeout(() => {
        this.sendResponse();
      }, 500);
    },
    sendResponse() {
      const randomIndex = Math.floor(Math.random() * this.chatbotResponses.length);
      const selectedResponse = this.chatbotResponses[randomIndex];

      let formattedResponse = {
        author: "chatbot",
        type: selectedResponse.type,
        content: null,
      };

      switch(selectedResponse.type) {

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
      this.messagesLog.push(formattedResponse);
    },
  },
};
</script>
