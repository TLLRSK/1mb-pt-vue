<template>
  <button class="btn btn--chat-option" :class="buttonClasses" @click="sendOption">
    {{ option.content }}
  </button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isAnimating: false,
    }
  },
  computed: {
    buttonClasses() {
      return { "anim--scale-bounce": this.isAnimating }
    },
  },
  methods: {
    ...mapActions(["processUserMessage"]),
    sendOption() {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 1000)
      this.processUserMessage(this.option);
    },
  },
};
</script>
