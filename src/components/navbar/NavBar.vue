<template>
    <nav class="nav-bar">
        <button class="btn--toggle-chat-window" @click="toggleChatbotWindow">
            <icon-minimize/>
        </button>
        <div class="chatbot-profile">
            <img class="chatbot-img" :src="botProfile.imgUrl" :alt="botProfile.name">
            <p class="chatbot-name">{{ botProfile.name }}</p>
        </div>
        <nav-dropdown-menu/>
    </nav>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import IconMinimize from '../icons/IconMinimize.vue';
    import NavDropdownMenu from './NavDropdownMenu.vue';
    export default {
        components: {
            NavDropdownMenu,
            IconMinimize,
        },
        computed: {
            ...mapState(['botProfile'])
        },
        methods: {
            ...mapMutations(['toggleChatbotWindow']),
        }
  }
</script>