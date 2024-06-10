<template>
  <button class="btn btn--minimize" @click="toggleChatbotWindowStatus">
    <icon-minimize />
  </button>
</template>
<script>
import { mapActions } from "vuex";
import IconMinimize from "../icons/IconMinimize.vue";
export default {
  components: {
    IconMinimize,
  },
  methods: {
    ...mapActions(["toggleChatbotWindowStatus"]),
  },
};
</script>
