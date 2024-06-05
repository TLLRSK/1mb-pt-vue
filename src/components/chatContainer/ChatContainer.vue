<template>
    <ul class="chat-container" ref="chatContainer">
        <message-image-card></message-image-card>
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
                const chatContainer = this.$refs.chatContainer;
                if (chatContainer) {
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                }
            },
        }
    };
</script>
  