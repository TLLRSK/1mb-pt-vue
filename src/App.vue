<template>
  <div class="chat-window">
    <Nav></Nav>
    <div class="messages">
      <message-image-card></message-image-card>
    </div>
    <message-input></message-input>
  </div>
</template>

<script>
import MessageInput from './components/messageInput/MessageInput.vue';
import MessageImageCard from './components/messages/MessageImageCard.vue';
import Nav from './components/nav/Nav.vue';

export default {
  components: {
    Nav,
    MessageImageCard,
    MessageInput,
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
