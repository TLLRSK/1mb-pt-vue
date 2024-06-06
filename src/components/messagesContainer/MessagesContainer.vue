<template>
    <ul class="messages-container" ref="messagesContainer">
      <template v-for="(message, index) in messagesLog" :key="index">
        <message-default
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
  import { mapState } from 'vuex';
  import MessageDefault from '../messages/MessageDefault.vue';
  import MessageImageCard from '../messages/MessageImageCard.vue';
  
  export default {
    components: {
      MessageDefault,
      MessageImageCard,
    },
    computed: {
      ...mapState(['messagesLog']),
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
  