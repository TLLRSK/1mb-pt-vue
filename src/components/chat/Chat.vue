<template>
    <ul class="chat" ref="messagesContainer">
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
      <message-writing v-if="isProcessingMessage"/>
    </ul>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import { MessageWriting, MessageDefault, MessageImageCard } from '../../data';

  
  export default {
    components: {
      MessageWriting,
      MessageDefault,
      MessageImageCard,
    },
    computed: {
      ...mapState(['messagesLog', 'isProcessingMessage']),
    },
    updated() {
      this.scrollToBottom();
    },
    methods: {
      scrollToBottom() {
        const messagesContainer = this.$refs.messagesContainer;
        setTimeout(() => {
          if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
          }
        }, 200);
      },
  },
  };
  </script>
  