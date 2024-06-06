<template>
  <section 
    :class="['app-chatbot', {'closed': !isChatbotOpen}]"
    v-if="isChatbotOpen">

      <div class="chatbot-container--hidden" v-if="!isChatWindowOpen">
        <button-show-chat/>
        <button-close-chat/>
      </div>

      <div class="chatbot-container--visible" v-else>
        <Top-bar/>
        <chat/>
        <chat-options-carousel/>
        <chat-input/>
        <chat-footer></chat-footer>
      </div>

  </section>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import TopBar from './components/topBar/TopBar.vue';
  import Chat from './components/chat/Chat.vue';
  import ChatOptionsCarousel from './components/chatOptionsCarousel/ChatOptionsCarousel.vue';
  import ChatInput from './components/chatInput/ChatInput.vue';
  import ChatFooter from './components/chatFooter/ChatFooter.vue';
  import ButtonCloseChat from './components/buttons/ButtonCloseChat.vue';
  import ButtonShowChat from './components/buttons/ButtonShowChat.vue';

  export default {
    components: {
      ButtonCloseChat,
      ButtonShowChat,
      TopBar,
      Chat,
      ChatInput,
      ChatOptionsCarousel,
      ChatFooter,
    },
    computed: {
      ...mapState(['isChatbotOpen', 'isChatWindowOpen']),
    },
    methods: {
      ...mapMutations(['toggleChatbotWindow', 'closeChatbot']),
    }
  };
</script>
