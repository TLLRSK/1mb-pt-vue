<template>
    <nav :class="['nav-bar', {open: isChatWindowOpen, closed: !isChatWindowOpen}]">
      <button @click="toggleChatWindow">-</button>
      <img :src="chatbot.imgUrl" :alt="chatbot.name">
      <p>{{ chatbot.name }}</p>
      <dropdown-menu/>
    </nav>
</template>

<script>
  import DropdownMenu from './dropdownMenu/DropdownMenu.vue'
  export default {
      components: {
          DropdownMenu
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