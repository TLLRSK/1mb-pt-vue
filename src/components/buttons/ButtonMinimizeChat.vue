<template>
  <button class="btn btn--minimize" @click="toggleChatbotWindowStatus">
    <icon-minimize />
  </button>
</template>
<script>
import { mapMutations } from "vuex";
import IconMinimize from "../icons/IconMinimize.vue";
export default {
  components: {
    IconMinimize,
  },
  methods: {
    ...mapMutations(["toggleChatbotWindowStatus"]),
  },
};
</script>
