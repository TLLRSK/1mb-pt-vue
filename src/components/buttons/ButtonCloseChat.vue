<template>
    <button class="btn btn--close-chatbot" @click="closeChatbot">
        <icon-close/>
    </button>
</template>
<script>
    import { mapMutations } from "vuex";
    import IconClose from '../icons/IconClose.vue';
    export default {
        components: {
            IconClose,
        },
        methods: {
            ...mapMutations(['toggleChatbotWindow', 'closeChatbot']),
        }
    }
</script>