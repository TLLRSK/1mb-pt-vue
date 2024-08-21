<template>
  <button class="btn btn--show-chatbot" @click="toggleChatbotWindowStatus">
    <chatbot-avatar size="full" />
  </button>
</template>

<script>
import { mapActions } from "vuex";
import { ChatbotAvatar } from '../../data';
export default {
  components: { ChatbotAvatar },
  methods: {
    ...mapActions(["toggleChatbotWindowStatus"]),
  },
};
</script>
