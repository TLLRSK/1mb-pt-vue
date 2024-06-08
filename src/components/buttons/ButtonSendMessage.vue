<template>
    <button class="btn btn--send-message" @click.prevent="processUserMessage" :disabled="isDisabled">
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
            ...mapState(['currentMessage']),
            isDisabled() {
                return this.currentMessage.content.length <= 0;
            }
        },
        methods: {
            ...mapActions(['processUserMessage']),
        }
    }
</script>