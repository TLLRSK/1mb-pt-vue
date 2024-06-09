<template>
  <section 
    :class="['app-chatbot', {'closed': !isChatbotOpen, 'fullscreen': isFullscreen}]"
    v-if="isChatbotOpen">

      <div :class="['chatbot-container--' + (isChatWindowOpen ? 'hidden' : 'minimized')]">
        <cto/>
        <button-show-chat/>
        <button-close-chat/>
      </div>

      <div :class="['chatbot-container--' + (isChatWindowOpen ? 'default' : 'hidden')]">
        <Top-bar/>
        <chat/>
        <chat-options-carousel/>
        <chat-input/>
        <chat-footer></chat-footer>
      </div>

  </section>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { ButtonCloseChat, ButtonShowChat, Chat, ChatFooter, ChatInput, ChatOptionsCarousel, Cto, TopBar } from './data';

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
      ...mapState(['isChatbotOpen', 'isChatWindowOpen', 'isFullscreen']),
    },
    methods: {
      ...mapMutations(['toggleChatbotWindow', 'closeChatbot']),
      ...mapActions(['checkFirstVisit'])
    },
    mounted() {
      this.checkFirstVisit();
    }
  };
</script>
