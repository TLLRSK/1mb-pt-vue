<template>
  <div class="chat-window">
    <Nav></Nav>
    <div class="messages">
      <message-image-card></message-image-card>
    </div>
    <chat-questions-carousel/>
    <message-input/>
  </div>
</template>

<script>
import ChatQuestionsCarousel from './components/chatContainer/ChatQuestionsCarousel.vue';
import MessageInput from './components/messageInput/MessageInput.vue';
import MessageImageCard from './components/messages/MessageImageCard.vue';
import Nav from './components/nav/Nav.vue';

export default {
  components: {
    Nav,
    MessageImageCard,
    MessageInput,
    ChatQuestionsCarousel,
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
</style>
