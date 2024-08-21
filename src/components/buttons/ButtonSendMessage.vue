<template>
  <button
    class="btn btn--send-message"
    :class="buttonClasses"
    @click.prevent="submitMessage"
    :disabled="isDisabled"
  >
    <icon-send />
  </button>
</template>
<script>
import { mapState, mapActions } from "vuex";
import IconSend from "../icons/IconSend.vue";

export default {
  components: {
    IconSend,
  },
  data() {
    return {
      isAnimating: false,
    }
  },
  computed: {
    ...mapState(["currentUserMessage"]),
    buttonClasses() {
      return { "anim--scale-bounce": this.isAnimating }
    },
    isDisabled() {
      return this.currentUserMessage.content.length <= 0;
    },
  },
  methods: {
    ...mapActions(["processUserMessage"]),
    submitMessage() {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 1000)
      
      this.processUserMessage(this.currentUserMessage);
    },
  },
};
</script>
