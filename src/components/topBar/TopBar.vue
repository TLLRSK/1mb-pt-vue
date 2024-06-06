<template>
    <header class="top-bar">
        <button-minimize-chat/>
        <div class="chatbot-profile">
            <img class="chatbot-img" :src="botProfile.imgUrl" :alt="botProfile.name">
            <p class="chatbot-name">{{ botProfile.name }}</p>
        </div>
        <dropdown-menu/>
    </header>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';
    import ButtonMinimizeChat from '../buttons/ButtonMinimizeChat.vue';
    import DropdownMenu from '../dropdownMenu/DropdownMenu.vue';
    export default {
        components: {
            DropdownMenu,
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