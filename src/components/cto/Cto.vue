<template>
  <button class="cto" v-if="isCtoOpen && isFirstVisit" @click="toggleChatbotWindowStatus">
    <button-close-cto />
    <p class="cto-message">How can I help you?</p>
  </button>
</template>
<script>
import { ButtonCloseCto } from "../../data";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  components: {
    ButtonCloseCto,
  },
  computed: {
    ...mapState(["isFirstVisit", "isCtoOpen"]),
  },
  methods: {
    ...mapActions(["toggleChatbotWindowStatus"]),
    ...mapMutations(["closeCto"]),
  },
  mounted() {
    setTimeout(() => {
      this.closeCto();
    }, 12000);
  },
};
</script>