<template>
    <div :class="chatbotAvatarSize">
        <div class="piece--1"></div>
        <div class="piece--2"></div>
        <div class="piece--3"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        props: {
            size: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                isAnimating: false,
            }
        },
        computed: {
            ...mapState(["isProcessingMessage"]),
            chatbotAvatarSize() {
                return [
                    `chatbot-avatar--${this.size}`,
                    { "anim--spin" : this.isAnimating}
                ]
            }
        },
        watch: {
            isProcessingMessage(newVal) {
            if (newVal) {
                    this.isAnimating = true;
                } else if (this.isAnimating) {
                    setTimeout(() => {
                    this.isAnimating = false;
                    }, 1000);
                }
            }
        },   
    }
</script>