<template>
  <div class="chat-window">
    <Nav></Nav>
    <chat-container></chat-container>
    <chat-questions-carousel/>
    <message-input/>
  </div>
</template>

<script>
import ChatContainer from './components/chatContainer/ChatContainer.vue';
import ChatQuestionsCarousel from './components/chatContainer/ChatQuestionsCarousel.vue';
import MessageInput from './components/messageInput/MessageInput.vue';
import MessageImageCard from './components/messages/MessageImageCard.vue';
import Nav from './components/nav/Nav.vue';

export default {
  components: {
    Nav,
    ChatContainer,
    MessageImageCard,
    ChatQuestionsCarousel,
    MessageInput,
  },
  data() {
    return {
      messagesLog: []
    };
  },
  methods: {
  }
};
</script>

<style>
</style>
