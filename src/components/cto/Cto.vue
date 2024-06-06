<template>
    <button class="cto" v-if="isCtoVisible" @click="toggleChatbotWindow">
        <button-close-cto/>
        <p class="cto-message">¿En qué puedo ayudarte?</p>
    </button>
</template>
<script>
    import { mapState } from 'vuex';
    import {ButtonCloseCto} from '../../data'
    import { mapMutations } from 'vuex';
    export default {
        components: {
            ButtonCloseCto,
        },
        computed: {
            ...mapState(['isCtoVisible']),
        },
        methods: {
            ...mapMutations(['toggleChatbotWindow']),
        },
    }
</script>