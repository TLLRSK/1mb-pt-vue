<template>
 
  <section class="chatbot"
    :class="chatbotClasses"
    v-if="this.status !== 'closed'"
  >
    <div 
      class="chatbot-container--minimized" 
      :class="minimizedContainerClasses"
    >
      <cto />
      <button-show-chat />
      <button-close-chat />
    </div>

    <div 
      class="chatbot-container--showing" 
      :class="showingContainerClasses"
    >
      <top-bar />
      <chat />
      <chat-options-carousel />
      <chat-input />
      <chat-footer />
    </div>

  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
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
  data() {
    return {
      status: 'open',
    }
  },
  computed: {
    ...mapState(["isChatbotOpen", "chatbotWindowStatus", "isFullscreen"]),

    chatbotClasses() {
      return [
        {
          minimized:
            this.chatbotWindowStatus == "minimized" ||
            this.chatbotWindowStatus == "toShowing",
        },
        {
          showing:
            this.chatbotWindowStatus == "showing" ||
            this.chatbotWindowStatus == "toMinimized",
        },
        { fullscreen: this.isFullscreen },
        { "closing": this.status === 'closing' },
      ];
    },
    minimizedContainerClasses() {
      return [
        { toShowing: this.chatbotWindowStatus == "toShowing" },
        { toMinimized: this.chatbotWindowStatus == "toMinimized" },
      ];
    },
    showingContainerClasses() {
      return [
        { toMinimized: this.chatbotWindowStatus == "toMinimized" },
        { toShowing: this.chatbotWindowStatus == "toShowing" },
      ];
    },
  },
  methods: {
    ...mapActions(["checkFirstVisit"]),
  },
  watch: {
    isChatbotOpen(newValue) {
      if (newValue === false) {
        console.log(newValue)
        this.status = 'closing';
        setTimeout(() => {
          this.status = 'closed';
        }, 400)
      } else {
        console.log(newValue)
      }
    },
  },
  mounted() {
    this.checkFirstVisit();
  },
};
</script>
