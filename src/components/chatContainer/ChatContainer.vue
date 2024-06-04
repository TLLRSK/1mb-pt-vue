<template>
    <ul class="chat-container">
      <message
        v-for="(message, index) in messages"
        :key="index"
        :message-author="message.author"
        :message-content="message.content"
      />
</ul>
</template>

<script>

import Message from '../messages/Message.vue';

export default {
        components: {
            Message,
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
  