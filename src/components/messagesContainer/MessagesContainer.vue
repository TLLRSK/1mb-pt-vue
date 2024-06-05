<template>
    <ul class="messages-container" ref="messagesContainer">
      <template v-for="(message, index) in messages" :key="index">
        <message
          v-if="message.type === 'default'"
          :message-author="message.author"
          :message-content="message.content"
        />
        <message-image-card
          v-if="message.type === 'imageCard'"
          :content="message.content"
        />
      </template>
    </ul>
  </template>
  
  <script>
  import Message from '../messages/Message.vue';
  import MessageImageCard from '../messages/MessageImageCard.vue';
  
  export default {
    components: {
      Message,
      MessageImageCard,
    },
    props: {
      messagesLog: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        messages: this.messagesLog,
      };
    },
    updated() {
      this.scrollToBottom();
    },
    methods: {
      scrollToBottom() {
        const messagesContainer = this.$refs.messagesContainer;
        if (messagesContainer) {
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
      },
    },
  };
  </script>
  