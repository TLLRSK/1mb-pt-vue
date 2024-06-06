<template>
    <form class="form">
        <input class="input" type="text" placeholder="Escribe tu pregunta" v-model="currentMessage.content">
        <button-send-message/>
    </form>
</template>

<script>
    import {mapState} from 'vuex';
    import { ButtonSendMessage } from '../../data';
    

    export default {
        components: {
            ButtonSendMessage,
        },
        computed: {
            ...mapState(['currentMessage']),
        },
    }
</script>