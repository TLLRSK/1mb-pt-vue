<template>
    <button class="btn--show-chatbot" @click="toggleChatbotWindow">
        <img :src="botProfile.imgUrl" alt="">
    </button>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
    export default {
        computed: {
            ...mapState(['botProfile']),
        },
        methods: {
            ...mapMutations(['toggleChatbotWindow'])
        }
    }
</script>