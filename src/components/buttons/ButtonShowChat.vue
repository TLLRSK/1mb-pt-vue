<template>
    <button class="btn--show-chatbot" @click="showChatWindow">
        <img :src="botProfile.imgUrl" alt="">
    </button>
</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default {
        computed: {
            ...mapState(['botProfile']),
        },
        methods: {
            ...mapActions(['showChatWindow'])
        }
    }
</script>