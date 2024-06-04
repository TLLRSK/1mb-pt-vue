<template>
  <div class="chat-window">
    <Nav></Nav>
    <div class="messages">
      <message-image-card></message-image-card>
    </div>
    <div class="input-area">
    </div>
  </div>
</template>

<script>
import MessageImageCard from './components/messages/MessageImageCard.vue';
import Nav from './components/nav/Nav.vue';

export default {
  components: {
    Nav,
    MessageImageCard
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
