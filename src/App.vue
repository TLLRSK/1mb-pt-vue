<template>
  <section
    :class="[
    'chatbot',
      {'minimized': chatbotWindowStatus == 'minimized' || chatbotWindowStatus == 'toShowing'},
      {'showing': chatbotWindowStatus == 'showing' || chatbotWindowStatus == 'toMinimized'},
      { fullscreen: isFullscreen }
    ]"
    v-if="isChatbotOpen"
  >
    <div class="chatbot-container--minimized"
      :class="[
      {'toShowing': chatbotWindowStatus == 'toShowing'},
      {'toMinimized': chatbotWindowStatus == 'toMinimized'}
      ]"
    >
      <cto />
      <button-show-chat />
      <button-close-chat />
    </div>

    <div class="chatbot-container--showing"
    :class="[
    {'toMinimized': chatbotWindowStatus == 'toMinimized'},
    {'toShowing': chatbotWindowStatus == 'toShowing'}
    ]"
    >
      <Top-bar />
      <chat />
      <chat-options-carousel />
      <chat-input />
      <chat-footer></chat-footer>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import {
  ButtonCloseChat,
  ButtonShowChat,
  Chat,
  ChatFooter,
  ChatInput,
  ChatOptionsCarousel,
  Cto,
  TopBar,
} from "./data";

export default {
  components: {
    ButtonCloseChat,
    ButtonShowChat,
    Cto,
    TopBar,
    Chat,
    ChatInput,
    ChatOptionsCarousel,
    ChatFooter,
  },
  computed: {
    ...mapState(["isChatbotOpen", "chatbotWindowStatus", "isFullscreen"]),
  },
  methods: {
    ...mapMutations(["toggleChatbotWindowStatus"]),
    ...mapActions(["checkFirstVisit"]),
  },
  mounted() {
    this.checkFirstVisit();
  },
};
</script>
