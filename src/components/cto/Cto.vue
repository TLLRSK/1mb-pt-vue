<template>
  <button class="cto" v-if="isCtoOpen && isFirstVisit" @click="toggleChatbotWindowStatus">
    <button-close-cto />
    <p class="cto-message">¿En qué puedo ayudarte?</p>
  </button>
</template>
<script>
import { ButtonCloseCto } from "../../data";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    ButtonCloseCto,
  },
  computed: {
    ...mapState(["isFirstVisit", "isCtoOpen"]),
  },
  methods: {
    ...mapActions(["toggleChatbotWindowStatus"]),
  },
  mounted() {
    setTimeout(() => {
      this.closeCto();
    }, 12000);
  },
};
</script>
