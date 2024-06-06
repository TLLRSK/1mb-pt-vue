<template>
    <button class="btn--toggle-chat-window" @click="toggleChatbotWindow">
        <icon-minimize/>
    </button>
</template>
<script>
    import { mapMutations } from 'vuex';
    import IconMinimize from '../icons/IconMinimize.vue';
    export default {
        components: {
            IconMinimize,
        },
        methods: {
            ...mapMutations(['toggleChatbotWindow']),
        }
    }
</script>