<template>
    <form action="send-message">
        <input type="text" placeholder="Escribe tu pregunta">
        <button-send-message></button-send-message>
    </form>
</template>

<script>
    import ButtonSendMessage from '../buttons/ButtonSendMessage.vue';
    export default {
        components: {ButtonSendMessage},
        data() {
            return {

            }
        }
    }
</script>

<style>
</style>