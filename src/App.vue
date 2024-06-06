<template>
  <section 
    :class="['app-chatbot', {'closed': !isChatbotOpen}]"
    v-if="isChatbotOpen">

      <div class="chatbot-container--hidden" v-if="!isChatWindowOpen">
        <button class="btn--show-chatbot" @click="toggleChatbotWindow">
          <img src="../public/images/chabot-pfp.gif" alt="">
        </button>
        <button class="btn--close-chatbot" @click="closeChatbot">
          <icon-close/>
        </button>
      </div>

      <div class="chatbot-container--visible" v-else>
        <nav-bar/>

        <messages-container />

        <chat-questions-carousel />

        <message-input/>

        <chatbot-footer></chatbot-footer>

      </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import NavBar from './components/navbar/NavBar.vue';
import MessagesContainer from './components/messagesContainer/MessagesContainer.vue';
import ChatQuestionsCarousel from './components/questionsCarousel/QuestionsCarousel.vue';
import MessageInput from './components/messageInput/MessageInput.vue';
import ChatbotFooter from './components/footer/ChatbotFooter.vue';
import IconClose from './components/icons/IconClose.vue';

export default {
  components: {
    NavBar,
    MessagesContainer,
    ChatQuestionsCarousel,
    MessageInput,
    ChatbotFooter,
    IconClose,
  },
  computed: {
    ...mapState(['isChatbotOpen', 'isChatWindowOpen']),
  },
  methods: {
    ...mapMutations(['toggleChatbotWindow', 'closeChatbot']),
  }
};
</script>
