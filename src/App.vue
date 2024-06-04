<template>
  <div class="chat-window">
    <nav-bar
    />

    <chat-container 
      :messagesLog="messagesLog"
    />

    <chat-questions-carousel
    />

    <message-input
      @send-message="sendMessage"
    />
  </div>
</template>

<script>
import ChatContainer from './components/chatContainer/ChatContainer.vue';
import ChatQuestionsCarousel from './components/chatContainer/ChatQuestionsCarousel.vue';
import MessageInput from './components/messageInput/MessageInput.vue';
import MessageImageCard from './components/messages/MessageImageCard.vue';
import NavBar from './components/navbar/NavBar.vue';

export default {
  components: {
    NavBar,
    ChatContainer,
    MessageImageCard,
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
      ]
    };
  },
  methods: {
    sendMessage(message) {
        this.messagesLog.push(message);
        console.log(this.messagesLog)
    },
  }
};
</script>

<style>
</style>
