<template>
    <button class="btn btn--send-message" @click.prevent="submitMessage" :disabled="isDisabled">
        <icon-send/>
    </button>
</template>
<script>
    import { mapState, mapActions } from 'vuex';
    import IconSend from '../icons/IconSend.vue';

    export default {
        components: {
            IconSend,
        },
        computed: {
            ...mapState(['currentUserMessage']),
            isDisabled() {
                return this.currentUserMessage.content.length <= 0;
            }
        },
        methods: {
            ...mapActions(['processUserMessage']),
            submitMessage() {
                this.processUserMessage(this.currentUserMessage);
            }
        }
    }
</script>