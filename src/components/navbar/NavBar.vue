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

<style>
  nav {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ccc;
    position: relative;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 10px;
  }
</style>
  