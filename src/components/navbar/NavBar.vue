<template>
    <nav class="nav-bar">
        <button-minimize-chat/>
        <div class="chatbot-profile">
            <img class="chatbot-img" :src="botProfile.imgUrl" :alt="botProfile.name">
            <p class="chatbot-name">{{ botProfile.name }}</p>
        </div>
        <nav-dropdown-menu/>
    </nav>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import ButtonMinimizeChat from '../buttons/ButtonMinimizeChat.vue';
    import NavDropdownMenu from './NavDropdownMenu.vue';
    export default {
        components: {
            NavDropdownMenu,
            ButtonMinimizeChat,
        },
        computed: {
            ...mapState(['botProfile'])
        },
        methods: {
            ...mapMutations(['toggleChatbotWindow']),
        }
  }
</script>