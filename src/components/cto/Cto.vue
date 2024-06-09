<template>
    <button class="cto" v-if="isCtoOpen" @click="showChatWindow">
        <button-close-cto/>
        <p class="cto-message">¿En qué puedo ayudarte?</p>
    </button>
</template>
<script>
    import {ButtonCloseCto} from '../../data'
    import { mapState, mapMutations, mapActions  } from 'vuex';
    export default {
        components: {
            ButtonCloseCto,
        },
        computed: {
            ...mapState(['isFirstVisit', 'isCtoOpen']),
        },
        methods: {
            ...mapActions(['showChatWindow']),
            ...mapMutations(['closeCto']),
        },
        mounted() {
            setTimeout(() => {
                this.closeCto();
            }, 12000)
        }
    }
</script>