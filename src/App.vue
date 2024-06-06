<template>
  <section 
    :class="['app-chatbot', {'closed': !isChatbotOpen}]"
    v-if="isChatbotOpen">

      <div class="chatbot-container--hidden" v-if="!isChatWindowOpen">
        <button-show-chat/>
        <button-close-chat/>
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
import ButtonCloseChat from './components/buttons/ButtonCloseChat.vue';
import ButtonShowChat from './components/buttons/ButtonShowChat.vue';

export default {
  components: {
    NavBar,
    MessagesContainer,
    ChatQuestionsCarousel,
    MessageInput,
    ChatbotFooter,
    ButtonCloseChat,
    ButtonShowChat,
  },
  computed: {
    ...mapState(['isChatbotOpen', 'isChatWindowOpen']),
  },
  methods: {
    ...mapMutations(['toggleChatbotWindow', 'closeChatbot']),
  }
};
</script>
