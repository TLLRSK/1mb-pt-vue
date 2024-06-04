<template>
    <form>
        <input type="text" placeholder="Escribe tu pregunta" v-model="messageContent">
        <button @click.prevent="sendMessage">Send</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                messageContent: "",
                author: "user",
            }
        },
        methods: {
            sendMessage()  {
                const message = { content: this.messageContent, author: this.author}
                this.$emit('send-message', message);
            }
        }
    }
</script>

<style>
</style>