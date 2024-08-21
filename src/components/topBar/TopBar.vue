<template>
  <header class="top-bar">
    <button-fullscreen />
    <button-minimize-chat />
    <div class="chatbot-profile">
      <chatbot-avatar size="small"/>
    </div>
    <dropdown-menu />
  </header>
</template>

<script>
import { mapMutations } from "vuex";
import { DropdownMenu, ButtonMinimizeChat, ButtonFullscreen, ChatbotAvatar } from "../../data";

export default {
  components: {
    DropdownMenu,
    ButtonMinimizeChat,
    ButtonFullscreen,
    ChatbotAvatar,
  },
  methods: {
    ...mapMutations(["toggleMinimized"]),
  },
};
</script>
