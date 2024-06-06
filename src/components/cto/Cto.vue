<template>
    <button class="cto" v-if="isCtoOpen" @click="showChatWindow">
        <button-close-cto/>
        <p class="cto-message">¿En qué puedo ayudarte?</p>
    </button>
</template>
<script>
    import { mapState } from 'vuex';
    import {ButtonCloseCto} from '../../data'
    import { mapActions } from 'vuex';
    export default {
        components: {
            ButtonCloseCto,
        },
        computed: {
            ...mapState(['isFirstVisit', 'isCtoOpen']),
        },
        methods: {
            ...mapActions(['showChatWindow']),
        },
    }
</script>