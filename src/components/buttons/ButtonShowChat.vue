<template>
  <button class="btn btn--show-chatbot" @click="toggleChatbotWindowStatus">
    <img :src="botProfile.imgUrl" :alt="botProfile.name" />
  </button>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["botProfile"]),
  },
  methods: {
    ...mapActions(["toggleChatbotWindowStatus"]),
  },
};
</script>
