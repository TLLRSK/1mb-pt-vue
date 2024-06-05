<template>
  <section class="app-chatbot">
    <nav-bar/>

    <main class="main">
      <chat-container 
      :messagesLog="messagesLog"
      />

      <chat-questions-carousel
      />

      <message-input
        @send-message="sendMessage"
      />
    </main>
  </section>
</template>

<script>
import ChatContainer from './components/chatContainer/ChatContainer.vue';
import ChatQuestionsCarousel from './components/questionsCarousel/QuestionsCarousel.vue';
import MessageInput from './components/messageInput/MessageInput.vue';
import MessageImageCard from './components/messages/MessageImageCard.vue';
import NavBar from './components/navbar/NavBar.vue';

export default {
  components: {
    NavBar,
    ChatContainer,
    ChatQuestionsCarousel,
    MessageInput,
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
