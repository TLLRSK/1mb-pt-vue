<template>
    <button class="btn--send-message" @click.prevent="sendMessage">
        <icon-send/>
    </button>
</template>
<script>
    import { mapActions } from 'vuex';
    import IconSend from '../icons/IconSend.vue';

    export default {
        components: {
            IconSend,
        },
        methods: {
            ...mapActions(['sendMessage']),
        }
    }
</script>