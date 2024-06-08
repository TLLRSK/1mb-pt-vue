<template>
  <button class="btn btn--chat-option" @click="sendOption">
    {{ option.content }}
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['processUserMessage']),
    sendOption() {
      this.processUserMessage(this.option);
    }
  }
}
</script>
