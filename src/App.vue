<template>
  <section class="app-chatbot">
    <nav-bar/>
    <chat-container 
      :messagesLog="messagesLog"
      />

      <chat-questions-carousel
      />

      <message-input
        @send-message="sendMessage"
      />
    <chatbot-footer></chatbot-footer>
  </section>
</template>

<script>
import NavBar from './components/navbar/NavBar.vue';
import ChatContainer from './components/chatContainer/ChatContainer.vue';
import ChatQuestionsCarousel from './components/questionsCarousel/QuestionsCarousel.vue';
import MessageInput from './components/messageInput/MessageInput.vue';
import ChatbotFooter from './components/footer/ChatbotFooter.vue';
export default {
  components: {
    NavBar,
    ChatContainer,
    ChatQuestionsCarousel,
    MessageInput,
    ChatbotFooter
  },
  data() {
    return {
      messagesLog: [
        {
            author: "user",
            content: "lorem ipsum lorem.",
        },
        {
            author: "chatbot",
            content: "lorem ipsum lorem ipsum.",
        },
      ],
      chatbotResponse: {
        author: "chatbot",
        content: "random response from chatbot"
      }
    };
  },
  methods: {
    sendMessage(message) {
        this.messagesLog.push(message);
        console.log(this.messagesLog)
        setTimeout(() => {
          this.sendResponse();
        }, 1000)
    },
    sendResponse() {
      this.messagesLog.push(this.chatbotResponse);
    }
  }
};
</script>

<style>
  @import './scss/style.scss';
</style>
