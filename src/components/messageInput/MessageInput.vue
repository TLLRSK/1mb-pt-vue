<template>
    <form class="form">
        <input class="input" type="text" placeholder="Escribe tu pregunta" v-model="currentMessage.content">
        <button class="btn--send-message" @click.prevent="sendMessage">
            <icon-send/>
        </button>
    </form>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import IconSend from '../icons/IconSend.vue';

    export default {
        components: {
            IconSend,
        },
        computed: {
            ...mapState(['currentMessage'],)
        },
        methods: {
           ...mapActions(['sendMessage']),
        }
    }
</script>