<template>
    <ul class="chat-container">
      <message
        v-for="(message, index) in messages"
        :key="index"
        :message-author="message.author"
        :message-content="message.content"
      />
      <message-image-card></message-image-card>
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
    };
</script>
  