<template>
    <nav :class="['nav-bar', {open: isChatWindowOpen, closed: !isChatWindowOpen}]">
        <button class="btn--toggle-chat-window" @click="toggleChatWindow">
            <span class="btn-bar"></span>
        </button>
        <div class="chatbot-profile">
        <img class="chatbot-img" :src="chatbot.imgUrl" :alt="chatbot.name">
        <p class="chatbot-name">{{ chatbot.name }}</p>
        </div>
        <nav-dropdown-menu/>
    </nav>
</template>

<script>
  import NavDropdownMenu from './NavDropdownMenu.vue'
  export default {
      components: {
          NavDropdownMenu
      },
      data() {
          return {
              chatbot: {
              imgUrl: "https://placehold.jp/16x16.png",
              name: "Bill"
              },
              isChatWindowOpen: true,
              isDropdownMenuOpen: false,
          };
      },
      methods: {
          toggleChatWindow() {
              this.isChatWindowOpen = !this.isChatWindowOpen;
          },
      }
  }
</script>