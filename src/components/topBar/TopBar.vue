<template>
  <header class="top-bar">
    <button-fullscreen />
    <button-minimize-chat />
    <div class="chatbot-profile">
      <img
        class="chatbot-img"
        :src="botProfile.imgUrl"
        :alt="botProfile.name"
      />
      <p class="chatbot-name">{{ botProfile.name }}</p>
    </div>
    <dropdown-menu />
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { DropdownMenu, ButtonMinimizeChat, ButtonFullscreen } from "../../data";

export default {
  components: {
    DropdownMenu,
    ButtonMinimizeChat,
    ButtonFullscreen,
  },
  computed: {
    ...mapState(["botProfile"]),
  },
  methods: {
    ...mapMutations(["toggleMinimized"]),
  },
};
</script>
