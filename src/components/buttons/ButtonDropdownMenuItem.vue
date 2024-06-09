<template>
  <button class="btn btn--dropdown-menu-item" @click="selectOption">
    {{ option.text }}
  </button>
</template>
<script>
export default {
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectOption() {
      this.$emit("closeMenu");
    },
  },
};
</script>
