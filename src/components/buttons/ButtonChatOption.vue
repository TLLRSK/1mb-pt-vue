<template>
  <button @click="handleClick">
    {{ option.text }}
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
    ...mapActions(['sendOption']),
    handleClick() {
      this.sendOption(this.option);
    }
  }
}
</script>
